import React from "react";
import styled from "styled-components";
import { Bye } from "../components/carepackagehome/bye";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Header } from "../components/header";
import Layout from "../components/layout";
import { About } from "../components/about/about";
const AboutUs = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header></Header>
      <About></About>
    </Layout>
  </ThemeProvider>
);

export default AboutUs;
