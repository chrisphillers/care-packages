import React from "react";
import styled from "styled-components";

export const Footer = () => (
  <FooterContainer>
    {/* <div style={{ textTransform: "uppercase", marginBottom: "150px" }}>
      Generously supported by:
    </div>
    <div>All rights reserved. 2020.</div> */}
  </FooterContainer>
);

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
