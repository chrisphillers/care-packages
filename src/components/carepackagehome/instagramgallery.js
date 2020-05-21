import React from "react";
import { theme } from "../../styles/theme";
import styled from "styled-components";

const localData = {
  lowerInfo: {
    title: "Follow our updates @uk.care.packages",
  },
};

export const InstaGallery = () => {
  const { title, sub_title } = localData.lowerInfo;
  return (
    <LowerInfoContainer>
      <Title>{title}</Title>
    </LowerInfoContainer>
  );
};

export const LowerInfoContainer = styled.div`
  padding: 4rem 0;
  text-transform: capitalize;
`;
export const Title = styled.div`
  font-size: calc(20px + (35 - 20) * ((100vw - 300px) / (1920 - 300)));
  padding-bottom: 2rem;

  @media (min-width: 600px) {
    width: 70vw;
    min-width: 300px;
    margin: 0% auto;
  }

  @media (min-width: 800px) {
    padding: 1.4rem 0;
  }
  @media (min-width: 1025px) {
    width: 44vw;
    padding: 1.4rem 0;
  }

  @media (min-width: 1441px) {
    width: 55vw;
    margin: 0% auto;
  }
`;
export const Thanks = styled.div`
  text-transform: uppercase;
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (1920 - 300)));
  color: ${theme.brandPrimary};
`;
