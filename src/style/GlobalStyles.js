import { createGlobalStyle } from "styled-components";
import { font } from "./Variables";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    font-family: ${font.Family};
  }
`;
