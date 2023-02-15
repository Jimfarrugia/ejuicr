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

  a:link, a:visited {
    text-decoration: none;
    color: ${colors.cyan};
  }

  a:active, a:hover {
    color: ${colors.pink};
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

  button {
    background: ${colors.purpleCyan};
    color: ${colors.black};
    font-weight: bold;
    border: none;
    border-radius: 2px;
    padding: 0.5em 0.75em;
    cursor: pointer;
    
    &:hover {
      background: ${colors.pinkPurple};
    }
    &:active {
      background: ${colors.pink};
    }
    &.red {
      background: ${colors.red};
    }
    &.green {
      background: ${colors.cyanGreen};
    }
  }
`;

export default GlobalStyles;
