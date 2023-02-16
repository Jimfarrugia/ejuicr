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
    margin: 0 auto;
    width: fit-content;
    background: ${colors.yellowPink};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h5 {
    font-size: 1.125rem;
    color: ${colors.blue};
    margin: 0;
    line-height: 35px;
    vertical-align: middle;
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

    & > span {
      margin-left: 0.5em;
    }
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

  input[type="text"] {
    height: 28px;
    width: 150px;
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

  .row {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5em;

    & button {
      height: 35px;
    }

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
`;

export default GlobalStyles;
