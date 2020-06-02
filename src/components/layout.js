import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Footer } from "./footer";
import styled from "styled-components";
// import { DrinkImage } from "../../content/assets/barimage.jpg"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query HeroImagesQuery2 {
      allImageSharp {
        nodes {
          fluid {
            src
            srcSet
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  `);

  return (
    <SiteWrapper>
      <Centre
      // DesktopImage={data.allImageSharp.nodes[0].fluid.src}
      // MobileImage={data.allImageSharp.nodes[0].fluid.src}
      >
        {children}
        <Footer></Footer>
      </Centre>
    </SiteWrapper>
  );
};
const SiteWrapper = styled.div`
  display: flex;

  justify-content: center;
  text-align: center;
  background-color: lightgrey;
`;

const Centre = styled.div`
  width: 100%;
  max-width: 1440px;
  /* padding: 0 1.4rem; */

  @media (min-width: 1025px) {
  }
`;
