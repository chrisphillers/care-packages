import React from "react";
import * as S from "./donate.styles";

const localData = {
  donate: {
    title: "Donate Now",
    sub_title: "Get the Drinks In",
    sub_sub_title: "The drink $ value amount will be your donation",
    donations: [
      { name: "Beer and a Shot", price: 10 },
      { name: "Tequila Rocks", description: "Top-shelf", price: 25 },
      {
        name: "Two Negronis",
        description: "New Yorkers Love Negronis",
        price: 50,
      },
      { name: "Pop a Bottle", description: "Because Why not?", price: 100 },
      { name: "Other", price: "$$" },
    ],
  },
};

export const DonateText = () => {
  const { title, sub_title, sub_sub_title, donations } = localData.donate;

  return <S.DonateTextContainer>DONATE</S.DonateTextContainer>;
};
