import React from "react";

import Layout from "../components/layout";
import { Hero } from "../components/carepackagehome/hero";
import { Donate } from "../components/carepackagehome/donate";
import { InstaGallery } from "../components/carepackagehome/instagramgallery";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Header } from "../components/header";
import { HeroText } from "../components/carepackagehome/herotext";
import { DonateText } from "../components/carepackagehome/donatetext";
import { WaysToHelpText } from "../components/carepackagehome/waystohelptext";
import { WaysToHelp } from "../components/carepackagehome/waystohelp";
import { Bye } from "../components/carepackagehome/bye";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header></Header>
        <Hero></Hero>
        <HeroText></HeroText>
        <DonateText></DonateText>
        <Donate></Donate>
        <WaysToHelpText></WaysToHelpText>
        <WaysToHelp></WaysToHelp>
        <InstaGallery></InstaGallery>
        <Bye></Bye>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
