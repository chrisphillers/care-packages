import { theme } from "../../styles/theme";
import styled from "styled-components";
import heroPic from "../../../content/assets/images/hero.png";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty("--vh", `${vh}px`)

// // We listen to the resize event
// window.addEventListener("resize", () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01
//   document.documentElement.style.setProperty("--vh", `${vh}px`)
// })

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.brandSecondary};
  /* align-content: center; */
  padding: 0 1rem;
  height: 500px;
`;

export const HeroText = styled.div`
  color: white;
  max-width: 800px;
  line-height: 2.4rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  p {
    font-size: calc(16px + (43 - 16) * ((100vw - 300px) / (1920 - 300)));
  }
  @media (min-width: 767px) {
    padding: 0 4rem;
  }
`;

export const HeroBlock = styled.div`
 background-image: url(${heroPic});
  /* background-repeat: no-repeat; */
  /* background-size: cover;  */
  background-repeat:no-repeat;
background-position: center center;
  /* background: url(${heroPic}) no-repeat contain center fixed;  */

  /* background-position: cover; */
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  height: calc(100vh - 80px);

  @media (min-width: 1025px) {
    justify-content: space-around;
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 2rem;

  svg {
    height: calc(70px + (90 - 70) * ((100vw - 300px) / (1920 - 300)));
    fill: ${theme.brandSecondary};
    margin-bottom: 0.6rem;
  }

  h2 {
    font-size: calc(16px + (36 - 16) * ((100vw - 300px) / (1920 - 300)));
    text-transform: capitalize;
  }

  @media (min-width: 600px) {
    svg {
      margin-bottom: 1rem;
    }
  }
`;

export const CentralContent = styled.div`
  }
`;
export const LowerContent = styled.div``;

export const HeroThanks = styled.div`
  margin-bottom: 0.6rem;
  color: ${theme.brandPrimary};
  font-size: calc(30px + (65 - 30) * ((100vw - 300px) / (1920 - 300)));
  @media (min-width: 1000px) {
    margin-bottom: 1rem;
  }
`;

export const HeroTitle = styled.h2`
  display: flex;
  align-items: center;
  align-self: center;
  line-height: 1.5em;
  font-size: calc(20px + (43 - 20) * ((100vw - 300px) / (1920 - 300)));

  margin: 0% auto;

  @media (min-width: 1000px) {
    width: 72%;
  }
`;

export const HeroByline = styled.div`
  font-family: "Recoleta Regular";
  font-size: calc(12px + (24 - 12) * ((100vw - 300px) / (1920 - 300)));

  p {
  }

  span {
    padding-top: 1rem;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }
`;

export const HeroInfo = styled.div`
  align-content: center;
  margin-bottom: 1rem;

  svg {
    width: calc(70px + (120 - 70) * ((100vw - 300px) / (1920 - 300)));
  }

  @media (min-width: 1000px) {
    width: 72%;
    margin-bottom: 0.1rem;
  }
`;
