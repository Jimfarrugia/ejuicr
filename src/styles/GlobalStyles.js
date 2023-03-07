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

  h2, h3, h4 {
    font-family: "Bebas Neue";
    margin: 0 auto;
    width: fit-content;
    background: ${colors.yellowPink};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 2.75rem;
  }

  h3 {
    font-size: 2.25rem;
  }

  h4 { 
    font-size: 1.75rem;
    margin: 2.5em 0 0;
  }

  h5 {
    font-size: 1rem;
    color: ${colors.blue};
    margin: 0;
    line-height: 35px;
    vertical-align: middle;
  }

  p {
    line-height: 1.5;
    margin: 1.5em 0;
  }

  ul {
    margin: 0;
    padding: 0 0 0 1em;
    
    & > li {
      margin-bottom: 0.375em;
      line-height: 1.35;
    }
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

      &:hover {
        background: ${colors.pinkPurple};
      }
      &:active {
        background: ${colors.pink};
      }
    }

    &.green {
      background: ${colors.cyanGreen};

      &:hover {
        background: ${colors.pinkPurple};
      }
      &:active {
        background: ${colors.pink};
      }
    }

    & > span {
      margin-left: 0.5em;
    }
  }

  .subtitle {
    padding: 0 2em;
    text-align: center;
  }

  /* hide default up/down buttons (Chrome, Safari, Edge, Opera) */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-border {
    display: inline-block;
    background: ${colors.purpleCyan};
    border-radius: 3px;
    padding: 2px;

    &:focus-within {
      background: ${colors.pinkPurple};
    }
  }

  input {
    background: ${colors.black};
    color: ${colors.white};
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    outline: none;
  }

  ::placeholder {
    color: ${colors.blue};
  }

  input[type="text"], input[type="email"], input[type="password"] {
    height: 27px;
    width: calc(100% - 12px);
    padding: 2px 6px;
    text-align: left;
  }

  input[type="number"] {
    -moz-appearance: textfield; /* hide default up/down buttons */
    width: 33px;
    height: 29px;
    padding: 1px;
    text-align: center;

    &.wide {
      width: 43px;
    }
  }

  .error-message, .success-message {
    background: ${colors.red};
    color: ${colors.black};
    font-size: 1rem;
    padding: 1em;
    margin: 0 0.5em 1em;
    border-radius: 3px;
    line-height: 1.5;
  }

  .success-message {
    background: ${colors.green};
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5em;

    & > div > span {
      line-height: 35px;

      &.base-ingredient {
        padding-left: 42px;
      }
    }

    & > div {
      width: fit-content;
    }

    & .label-left {
      margin: 0 7px 0 0;
    }

    & .label-right {
      margin: 0 0 0 7px;
    }

    & .label-between {
      margin: 0 7px;
    }
  }

  .config-wrapper {
    background: ${colors.black};
    margin: 1em 0.5em 0;
    border-radius: 3px;


    & input {
      background: ${colors.grayDark};
    }

    & .row {
      padding: 1em 2em;
    }

    & hr {
      margin: 0 1em;
    }

  }

  .recipe-header {
    h2 { text-align: center; }
    & hr {
      margin-bottom: 2em;
    }
  }
`;

export default GlobalStyles;
