import styled from "styled-components";
// import { colors } from "../../constants";

export const SaveRecipeStyled = styled.div`
  h3 {
    margin: 1em auto 0;
    display: none; // hide the login heading

    &:first-child {
      display: block;
    }
  }

  & button {
    padding: 0.5em 0.75em;
    line-height: 1.5;
    height: 100%;

    & > svg {
      margin-right: 0.5em;
      margin-bottom: -0.0725em;
      font-size: 1rem;
    }
  }

  .form-row {
    display: flex;
    margin: 1.5em 0.5em;

    & > div:first-child {
      flex-grow: 2;
      padding-right: 1em;
    }

    & .input-border {
      width: 100%;
    }

    @media (max-width: 400px) {
      display: block;

      & > div:first-child {
        padding-right: 0;
        margin-bottom: 1em;

        & .input-border {
          max-width: 260px;
          margin: 0 auto;
          display: block;
        }

        & input {
          text-align: center;
        }
      }

      & > div:last-child {
        text-align: center;
      }
    }
  }

  .row {
    & > div {
      width: 50%;

      & > p {
        margin: 0;
      }

      &:last-child {
        padding-left: 1em;
        width: fit-content;
      }
    }

    & ul,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    & li {
      margin: 0 0 1em;
    }

    @media (max-width: 440px) {
      display: block;
      margin: 0;
      padding: 0;

      & > div {
        width: 100% !important;
        margin: 1.5em 0 1em;
        padding: 0;
        text-align: center;

        & > p {
          padding: 0 1em;
        }

        &:last-child {
          padding: 0 !important;
          width: 100%;
        }
      }
    }
  }

  // login form
  .sidemenu-form-row {
    text-align: center;

    &:first-child {
      margin-top: 2em;
    }

    & .input-border {
      display: block;
      max-width: 260px;
      margin: 0 auto 1em;
    }

    & button {
      font-size: 1rem;
      padding: 0.5em 1.25em;

      &:first-child {
        margin-bottom: 0.5em;
        margin-right: 1em;
      }
    }
  }

  p.small {
    display: none;
  }
`;
