import { theme } from "../../styles/theme";
import styled from "styled-components";

export const DonateContainer = styled.div`
  color: white;
  background-color: ${theme.brandPrimary};
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    justify-self: center;
  }
`;
export const DonateTextContainer = styled.div`
  color: ${theme.brandPrimary};
  background-color: white;
  height: 400px;
  @media (min-width: 600px) {
    justify-self: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 3rem;
  h1 {
    font-size: calc(45px + (70 - 45) * ((100vw - 300px) / (1920 - 300)));
    margin: 0;
  }
  p {
    color: white;
    text-transform: uppercase;
    margin: 0.4rem;
    font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1920 - 300)));
  }

  .subsub {
    text-transform: capitalize;
    color: white;
    font-size: calc(10px + (15 - 10) * ((100vw - 300px) / (1920 - 300)));
  }

  @media (min-width: 800px) {
    margin-bottom: 6rem;
  }
`;

export const Donations = styled.div``;

export const Donation = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid white;
  align-items: center;
  color: ${theme.brandPrimary};

  :hover {
    h2 {
      color: white;
    }

    .amount {
      background-color: ${theme.brandPrimary};
    }
  }

  h2 {
    font-size: calc(22px + (35 - 22) * ((100vw - 300px) / (1920 - 300)));
  }

  h3 {
    padding-top: 0.4rem;
    font-size: calc(12px + (20 - 12) * ((100vw - 300px) / (1920 - 300)));
    text-transform: uppercase;
  }

  span {
    text-align: left;
    padding: 1rem 0;
  }

  @media (min-width: 1000px) {
    width: 55%;

    margin: 0% auto;
  }
`;
export const Amount = styled.div`
  display: flex;

  background-color: white;
  color: black;
  height: 30px;
  width: 60px;

  align-items: center;
  justify-content: center;
  h3 {
    font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1920 - 300)));
    padding: 0;
  }

  @media (min-width: 800px) {
    height: 45px;
    width: 90px;
  }
`;
