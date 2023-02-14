import { createGlobalStyle } from "styled-components";
import { colors } from "../constants";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.white};
    background: ${colors.grayDark};
    font-family: sans-serif;
  }

  main {
    padding: 1em;
  }

  a {
    text-decoration: none;
    color: ${colors.cyan}
  }
`;

export default GlobalStyles;
