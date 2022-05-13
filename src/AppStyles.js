import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
`;

export const BlurTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const BlurBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
