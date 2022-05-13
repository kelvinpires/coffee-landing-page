import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --background: #000;
  --text-color: #FFF;
  --button: #8257E5;
  --border: #29292E;
  --border-menu-mobile: #A8A8B3;
  --text-color-menu-mobile: #E1E1E6;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--background);
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
