import React from "react";
import * as S from "./hero.styles";
import InfoArrow from "../../../content/assets/svgs/info-arrow.svg";
// import HeroPic from "../../../content/assets/images/hero.png";

const localdata = {
  header: {
    title: "Keep the drinks alive",
  },
  hero: {
    hero_title: "For All the Great Nights We’ve Had and Will Have Again Soon",
    text_line1:
      "Bars, our favorite bartenders... Oh how we miss you. We can't wait to prop up our favorite bar again soon. For now though - let's pay it forward, say thanks, and offer some support during this challenging period of time.",
    text_line2:
      "We’re asking you to buy them a drink – or three. All funds go directly to hospitality workers relief fund.",
  },
};

export const HeroText = () => {
  const { hero_title, text_line1, text_line2 } = localdata.hero;

  return (
    <>
      <S.HeroText>
        Being admitted to hospital with Covid-19 can be a very scary and
        isolating time for people. As families aren’t able to visit patients,
        they don’t have all the nice things that their families would normally
        be able to bring in for them. With your donations we will provide Care
        Packages to as many patients across London as possible.
        {/* <S.HeaderContainer>
          <BarLogo></BarLogo>
          <HeroPic></HeroPic>

          <h2>{localdata.header.title}</h2>
        </S.HeaderContainer>
        <div>
          <S.HeroThanks>Thank You</S.HeroThanks>
          <S.HeroTitle>{hero_title}</S.HeroTitle>
        </div>
        <S.HeroByline>
          <p>{text_line1}</p>
          <span>
            <p> {text_line2}</p>
          </span>
        </S.HeroByline>
        <S.HeroInfo>
          <InfoArrow></InfoArrow>
        </S.HeroInfo> */}
      </S.HeroText>
    </>
  );
};
