import styled from "styled-components";
import { Button } from "../Header/styles";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitlesContainer = styled.div`
  text-align: center;
`;

export const NormalTitle = styled.h1`
  font-size: 8rem;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: var(--text-color);
  line-height: 0.5;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
  }
`;

export const CustomTitle = styled(NormalTitle)`
  color: var(--background);
  text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
    -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;

export const CoffeeImg = styled.img`
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

// extra content smartphone;

export const CoffeeInfoContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: none;
  }
  text-align: center;
`;

export const CoffeeInfoText = styled.h2`
  @media screen and (min-width: 700px) {
    display: none;
  }
  font-size: 3rem;
  font-weight: 600;
  font-family: "Manrope", sans-serif;
  color: var(--text-color);
  line-height: 4rem;
`;

export const CoffeeInfoButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;

export const CoffeeInfoButton = styled(Button)`
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
