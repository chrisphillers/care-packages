import React from "react";
import Twitter from "../../content/assets/svgs/twitter.svg";
import Facebook from "../../content/assets/svgs/facebook.svg";
import Instagram from "../../content/assets/svgs/instagram.svg";
import heroPic from "../../content/assets/images/hero.png";
// import twitter from "../../content/assets/svgs/twitter.svg";
import styled from "styled-components";
import InfoArrow from "../../content/assets/svgs/info-arrow.svg";

import { theme } from "../styles/theme";
export const Header = () => {
  const [aboutUsRender, setAboutUsRender] = React.useState(false);
  // let aboutUsRender = false;

  React.useEffect(() => {
    window.location.pathname === "/about-us"
      ? setAboutUsRender(true)
      : setAboutUsRender(false);
  }, []);
  console.log(aboutUsRender);
  return (
    <HeaderBlock
      aboutUsRender={aboutUsRender}
      // style={{
      //   display: "flex",
      //   textTransform: "uppercase",
      //   // paddingBottom: "150px",
      //   justifyContent: "space-between",
      //   backgroundColor: "white",
      //   // height: "100%",
      // }}
    >
      <Top>
        <Nav>
          {aboutUsRender ? (
            <a className="about" href="/">
              Home
            </a>
          ) : (
            <a className="about" href="/about-us">
              About us
            </a>
          )}

          <DonateButton href="#donate">Donate</DonateButton>
        </Nav>
        <SocialLogos>
          {/* <img src="../../content/assets/svgs/twitter.svg"></img> */}
          <div>
            <Twitter></Twitter>
          </div>
          <div>
            <a href="https://www.facebook.com/Care-Packages-104068491271279/">
              <Facebook></Facebook>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/uk.care.packages/">
              <Instagram></Instagram>
            </a>
          </div>
        </SocialLogos>
      </Top>
      <InfoArrow fill="black" color="black"></InfoArrow>
      {/* <img src="../../content/assets/svgs/info-arrow.svg"></img> */}
    </HeaderBlock>
  );
};

export const SocialLogos = styled.div`
  margin: 1rem;

  /* padding: 2rem; */
  display: flex;
  svg {
    height: auto;
    width: 1.5rem;
    margin: 0.2rem;
    :hover {
      fill: white;
    }
  }

  svg > * {
    /* align-content: center;
    flex-direction: column; */
    :hover {
      fill: white;
    }
  }

  @media (min-width: 767px) {
    svg {
      width: 2.3rem;
      margin: 0 0.2rem;
    }
  }

  /* display: none; */
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 12rem;
  font-size: calc(12px + (26 - 12) * ((100vw - 300px) / (1920 - 300)));
  /* justify-content: flex-start; */
  /* margin: 1rem; */
  /* padding: 2rem; */

  > * {
    /* margin: 0.6rem; */
  }

  @media (min-width: 767px) {
    margin: 2rem;
    width: 20rem;
  }

  > * {
    /* margin: 1rem; */
  }

  .about {
    text-decoration: none;
    color: ${theme.brandPrimary};
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const DonateButton = styled.a`
  background-color: ${theme.brandPrimary};
  color: white;
  padding: 0.4rem 1.4rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: lightgrey;
    color: ${theme.brandPrimary};
  }
  @media (min-width: 767px) {
    padding: 0.6rem 2rem;
  }
`;

export const HeaderBlock = styled.div`
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;

  background-position: center;
  height: ${({ aboutUsRender }) => (aboutUsRender ? "0px" : "80vh")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding-bottom: 4rem; */
  background-image: url(${({ aboutUsRender }) =>
    aboutUsRender ? null : heroPic});

  @media (min-width: 767px) {
    padding: 0.6rem 2rem;
    background-position: center -20px;
  }
`;
