import React from "react";
import * as S from "./donate.styles";
import styled from "styled-components";
import lush from "../../../content/assets/images/lush2.png";

export const Bye = () => (
  <FooterContainer>
    <h2>Take care of yourselves and stay home!</h2>
    <h1>💙</h1>
    <div>With kind support from:</div>
    <div>
      {" "}
      <img src={lush} width="140px"></img>
    </div>
  </FooterContainer>
);

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  background-color: white;
  padding: 0 1rem;
`;
