import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
`;

export const BlurTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const BlurBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const BlurMobile = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
