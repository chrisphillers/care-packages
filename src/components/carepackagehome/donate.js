import React from "react";
import * as S from "./donate.styles";

const localData = {
  donate: {
    donate_title_1: "Bank Transfer",
    donate_sub_title_1: "Account No: 43174469",
    donate_sub_title_a1: "Sort code: 54-41-00",
    donate_title_2: "Paypal",
    donate_sub_title_2:
      "Select the ‘sending to a friend or family’ option to prevent PayPal taking fees from your donation",
    donations: [
      { name: "1 Care Package", price: 5 },
      { name: "2 Care Packages", price: 10 },
      { name: "3 Care Packages", price: 15 },
      { name: "4 Care Packages", price: 20 },
      { name: "5 Care Packages", price: 25 },
      { name: "As many Care packages as you want", price: "££" },
    ],
  },
};

export const Donate = () => {
  const {
    donate_sub_title_1,
    donate_sub_title_2,
    donate_sub_title_a1,
    donate_title_2,
    donate_title_1,
    donations,
  } = localData.donate;

  return (
    <S.DonateContainer>
      <S.Title>
        <h2>{donate_title_1}</h2>
        <p>{donate_sub_title_1}</p>
        <p>{donate_sub_title_a1}</p>
      </S.Title>
      <S.Title>
        <h2>{donate_title_2}</h2>
        <p>{donate_sub_title_2}</p>
      </S.Title>
      <S.Donations>
        {donations.map((donation) => {
          return (
            <S.Donation
              key={donation.name}
              href="https://usbgfoundation.networkforgood.com/projects/95524-covid-19-relief-campaign"
              target="_blank"
            >
              <span>
                <h2>{donation.name}</h2>
                <h3>{donation?.description}</h3>
              </span>

              <S.Amount className="amount">
                <h3>£{donation.price}</h3>
              </S.Amount>
            </S.Donation>
          );
        })}
      </S.Donations>
    </S.DonateContainer>
  );
};
