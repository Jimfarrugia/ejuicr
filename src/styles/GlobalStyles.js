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

  hr {
    margin: 1em 0;
    border-top: 0.125rem dotted ${colors.gray};
    border-bottom: none;
    border-left: none;
    border-right: none;
  }

  h3 {
    font-family: "Bebas Neue";
    font-size: 2rem;
    margin: 0;
    background: ${colors.yellowPink};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
`;

export default GlobalStyles;
