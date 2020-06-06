import React from "react";
import styled from "styled-components";
import { theme } from "../../../src/styles/theme";
import Twitter from "../../../content/assets/svgs/twitter.svg";
import Facebook from "../../../content/assets/svgs/facebook.svg";
import Instagram from "../../../content/assets/svgs/instagram.svg";

const data = {
  waystohelp: [
    {
      title: "share",
      text: "Sharing any of our social media pages is a great way to help",
      color: theme.brandPrimary,
      share: true,
    },
    {
      title: "art",
      text:
        "We try and include a small artwork in each of our packaged, so if you’re an artist who would like to get involved please message us!",
      color: theme.brandSecondary,
      share: false,
    },
    {
      title: "production",
      text:
        "If you are a brand that can offer a sustainable product donations then please get in touch",
      color: theme.brandTertiary,
      share: false,
    },
  ],
};

export const WaysToHelp = () => (
  <WaysToHelpWrapper>
    {data.waystohelp.map((con) => (
      <WaysToHelpItem content={con}></WaysToHelpItem>
    ))}
    {/* <WaysToHelpItem color="red" title="Share" content={}></WaysToHelpItem>
    <WaysToHelpItem color="yellow" title="Art" content={}></WaysToHelpItem>
    <WaysToHelpItem color="black" title="Product" content={}></WaysToHelpItem> */}
  </WaysToHelpWrapper>
);

export const WaysToHelpWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* justify-content: center; */
`;

const HelpItem = styled.div`
  display: flex;
  flex-direction: column;
  /* text-transform: uppercase; */
  flex-wrap: no-wrap;
  padding: 2rem;
  line-height: 3rem;
  justify-content: space-evenly;
  /* flex: 1; */
  width: 100%;
  /* flex-grow: 1; */
  height: 320px;
  /* width: 28%; */
  /* min-width: 300px; */
  /* justify-content: space-evenly; */
  background-color: ${(props) => props.content?.color};
  color: white;
  font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1920 - 300)));
  h2 {
    text-transform: capitalise;
  }

  @media (min-width: 767px) {
    flex-wrap: wrap;
    flex: 1;
    height: 400px;
    line-height: 2.3rem;
    padding: 1rem;
    justify-content: space-around;
  }
`;

export const SocialLogos = styled.div`
  /* margin: 1rem;
  padding: 2rem; */
  padding: 1rem;

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

  /* display: none; */
`;

export const WaysToHelpItem = (props) => (
  <HelpItem {...props}>
    <h1>{props.content.title}</h1>
    <div>
      <h2>{props.content.text}</h2>
      {props.content?.share && (
        <SocialLogos>
          {/* <img src="../../content/assets/svgs/twitter.svg"></img> */}
          <Twitter height="2.3rem"></Twitter>
          <a href="https://www.facebook.com/Care-Packages-104068491271279/">
            <Facebook height="2.3rem"></Facebook>
          </a>
          <a href="https://www.instagram.com/uk.care.packages/">
            <Instagram height="2.3rem"></Instagram>
          </a>
        </SocialLogos>
      )}
    </div>
  </HelpItem>
);
