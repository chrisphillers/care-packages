import React from "react";
import hospital from "../../../content/assets/images/hospital.png";
import styled from "styled-components";

export const About = () => (
  <AboutContainer>
    <h2>About Us</h2>
    {/* <Hospital></Hospital> */}
    <img src={hospital}></img>
    <div>Care Packages was started by Bella Phillips etc etc etc</div>
  </AboutContainer>
);

export const AboutContainer = styled.div`
  padding-top: 60px;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  /* height: 500px; */
  background-color: white;

  h2 {
    padding: 1rem;
  }

  img {
    width: 100vw;
    padding-bottom: 1rem;
  }
`;
