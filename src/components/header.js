import React from "react";
import Twitter from "../../content/assets/svgs/twitter.svg";
import Facebook from "../../content/assets/svgs/facebook.svg";
import Instagram from "../../content/assets/svgs/instagram.svg";
// import twitter from "../../content/assets/svgs/twitter.svg";
import styled from "styled-components";
import { theme } from "../styles/theme";
export const Header = () => (
  <div
    style={{
      display: "flex",
      textTransform: "uppercase",
      // paddingBottom: "150px",
      justifyContent: "space-between",
      backgroundColor: "white",
      // height: "100%",
    }}
  >
    <Nav>
      <div>About us</div>
      <DonateButton>Donate</DonateButton>
    </Nav>
    <SocialLogos>
      <img src="../../content/assets/svgs/twitter.svg"></img>
      <Twitter height="2.3rem"></Twitter>
      <Facebook height="2.3rem"></Facebook>
      <Instagram height="2.3rem"></Instagram>
    </SocialLogos>
  </div>
);

export const SocialLogos = styled.div`
  margin: 1rem;
  padding: 2rem;

  svg {
    :hover {
      fill: white;
    }
  }

  svg > * {
    :hover {
      fill: white;
    }
  }

  display: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 2rem;

  > * {
    margin: 1rem;
  }
`;

export const DonateButton = styled.div`
  background-color: ${theme.brandPrimary};
  color: white;
  padding: 0.4rem 2.2rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: lightgrey;
    color: ${theme.brandPrimary};
  }
`;
