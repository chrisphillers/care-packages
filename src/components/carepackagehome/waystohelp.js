import React from "react";
import styled from "styled-components";
import { theme } from "../../../src/styles/theme";
// import Twitter from "../../content/assets/svgs/twitter.svg";
// import Facebook from "../../content/assets/svgs/facebook.svg";
// import Instagram from "../../content/assets/svgs/instagram.svg";

const data = {
  waystohelp: [
    {
      title: "share",
      text: "Sharing any of our social media pages is a great way to help",
      color: theme.brandPrimary,
    },
    {
      title: "art",
      text:
        "We try and include a small artwork in each of our packaged, so if you’re an artist who would like to get involved please message us!",
      color: theme.brandSecondary,
    },
    {
      title: "production",
      text:
        "If you are a brand that can offer a sustainable product donations then please get in touch",
      color: theme.brandTertiary,
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
  height: 400px;
  /* width: 28%; */
  /* min-width: 300px; */
  /* justify-content: space-evenly; */
  background-color: ${(props) => props.content.color};
  color: white;
  h2 {
    text-transform: capitalise;
  }
`;

export const WaysToHelpItem = (props) => (
  <HelpItem {...props}>
    <h1>{props.content.title}</h1>
    <h2>{props.content.text}</h2>
  </HelpItem>
);
