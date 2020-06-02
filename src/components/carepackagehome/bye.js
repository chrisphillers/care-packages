import React from "react";
import * as S from "./donate.styles";
import styled from "styled-components";

export const Bye = () => (
  <FooterContainer>
    <div>Take care of yourselves and stay home!</div>
    <div>💙</div>

    <div>With kind support from:</div>
    <ul>
      <li>
        <img></img>
      </li>
      <li>
        <img></img>
      </li>
    </ul>
  </FooterContainer>
);

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  background-color: white;
`;
