import React from "react";
import * as S from "./donate.styles";

const localData = {
  donate: {
    title: "Donate",
    sub_title:
      "By donating just £5 you can provide a toiletries style Care Package for people in hospital. The packs are a small and practical way of showing care and love for the patients through this unsettling time.",
  },
};

export const DonateText = () => {
  const { title, sub_title } = localData.donate;

  return (
    <S.DonateTextContainer id="donate">
      <h1>{title}</h1>
      <div>{sub_title}</div>
    </S.DonateTextContainer>
  );
};
