import React from "react";
import hospital from "../../../content/assets/images/hospital.png";
import carepackage from "../../../content/assets/images/care-package.png";

import styled from "styled-components";

export const About = () => (
  <AboutContainer>
    {/* <h2>About Us</h2> */}
    <First>
      <img src={hospital}></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>
          Nurse Pam Robertshaw and Bella Phillips have been putting together
          toiletries style care packages full of essentials to give to
          coronavirus patients and have raised about £1500 for the project since
          they started fundraising on April 11.
        </p>
        <p>
          The pair delivered the first 100 to Chelsea and Westminster hospital,
          where Pam works, last Saturday (April 18). Upon delivering the
          packages volunteers from the hospital drop them off to patients. Bella
          said: “The packs are a small and practical way of showing care and
          love for the patients through this unsettling time.”
        </p>
      </div>
    </First>
    <First>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>
          The packages include a toothbrush, toothpaste, shower gel, lip salve,
          a comb and a hand-made Lino print.
        </p>
      </div>
      <img src={carepackage}></img>
    </First>
  </AboutContainer>
);

export const AboutContainer = styled.div`
  padding-top: 90px;
  /* height: 100vh; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  /* height: 500px; */
  background-color: white;

  h2 {
    padding: 1rem;
  }

  img {
    width: 100%;
    /* overflow: hidden; */
    /* padding-bottom: 1rem; */
  }

  p {
    padding: 1rem 3rem;
    line-height: 1.2rem;
    font-size: 14px;
  }

  @media (min-width: 767px) {
    img {
      width: 50%;
      /* overflow: hidden; */
      /* padding-bottom: 1rem; */
    }
  }

  @media (min-width: 900px) {
    p {
      line-height: 1.6rem;
      font-size: 16px;
    }
  }
`;

export const First = styled.div`
  display: flex;
  @media (min-width: 767px) {
    flex-direction: row;
  }
  flex-direction: column;
`;
