import { createGlobalStyle } from "styled-components";
import { layoutWidth } from "../constants";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text.main};
    background:  ${({ theme }) => theme.background.main};
    font-family: sans-serif;
  }

  main {
    padding: 1em;
    max-width: ${layoutWidth};
    margin: 0 auto;
  }

  a:link, a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.text.link};
  }

  a:active, a:hover {
    color: ${({ theme }) => theme.text.hover};
  }

  hr {
    margin: 1em 0;
    border-top: 0.125rem dotted ${({ theme }) => theme.hr};
    border-bottom: none;
    border-left: none;
    border-right: none;
  }

  h2, h3, h4 {
    font-family: "Bebas Neue";
    margin: 0 auto;
    width: fit-content;
    background: ${({ theme }) => theme.heading.main};
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
    color: ${({ theme }) => theme.heading.secondary};
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

  ol {
    margin: 0;
    padding: 0 0 0 2em;

    & > li {
      line-height: 1.35;
      margin: 0 0 1em;
    }
  }

  button {
    background: ${({ theme }) => theme.button.main};
    color: ${({ theme }) => theme.text.button};
    font-weight: bold;
    border: none;
    border-radius: 2px;
    padding: 0.5em 0.75em;
    cursor: pointer;
    
    &:hover {
      background: ${({ theme }) => theme.button.hover};
    }
    &:active {
      background: ${({ theme }) => theme.button.active};
    }

    &.red {
      background: ${({ theme }) => theme.error};

      &:hover {
        background: ${({ theme }) => theme.button.hover};
      }
      &:active {
        background: ${({ theme }) => theme.button.active};
      }
    }

    &.green {
      background: ${({ theme }) => theme.success};

      &:hover {
        background: ${({ theme }) => theme.button.hover};
      }
      &:active {
        background: ${({ theme }) => theme.button.active};
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
    background: ${({ theme }) => theme.border.main};
    border-radius: 3px;
    padding: 2px;

    &:focus-within {
      background: ${({ theme }) => theme.border.focus};
    }
  }

  input {
    background: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.text.main};
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
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
    background: ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.text.button};
    font-size: 1rem;
    padding: 1em;
    margin: 0 0.5em 1em;
    border-radius: 3px;
    line-height: 1.5;
  }

  .success-message {
    background: ${({ theme }) => theme.success};
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
    background: ${({ theme }) => theme.background.dark};
    margin: 1em 0.5em 0;
    border-radius: 3px;


    & input {
      background: ${({ theme }) => theme.background.main};
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

  .tooltip {
    background: ${({ theme }) => theme.background.dark};
    max-width: 180px;
    font-size: 0.85rem;
    line-height: 1.35;
    padding: 0.75em;
  }

  &.google-form {
    height: 40px;

    button {
      background: none;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
