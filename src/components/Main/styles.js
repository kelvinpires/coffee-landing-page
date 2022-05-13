import styled from "styled-components";

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
`;

export const CustomTitle = styled(NormalTitle)`
  color: var(--background);
  text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
    -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;

export const CoffeeImg = styled.img``;
