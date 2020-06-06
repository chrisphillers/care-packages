import React from "react";
// import hospital from "../../../content/assets/images/hospital.png";
import styled from "styled-components";
import { Bye } from "../components/carepackagehome/bye";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Header } from "../components/header";
import Layout from "../components/layout";
const AboutUs = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header></Header>
      <AboutContainer>
        <h2>About Us</h2>
        {/* <Hospital></Hospital> */}
        {/* <img src={hospital}></img> */}
        <div></div>
      </AboutContainer>
      <Bye></Bye>
    </Layout>
  </ThemeProvider>
);

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  background-color: white;
`;

export default AboutUs;
