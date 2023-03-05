import styled from "styled-components";
// import { colors } from "../../constants";

export const RecipesStyled = styled.div`
  .list-headings {
    display: flex;
    margin-bottom: 1em;

    h5 {
      font-size: 0.9rem;

      &:first-child {
        flex-grow: 2;
      }

      &:nth-child(2) {
        text-align: right;
      }

      &:last-child {
        width: calc(35px + 1em);
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    margin-bottom: 1em;

    button {
      margin-left: 1em;
    }

    & > div {
      &:first-child {
        flex-grow: 2;
        padding-top: 0.5em;
        padding-right: 1em;
      }

      &:nth-child(2) {
        padding-top: 0.5em;
      }

      &:last-child {
      }
    }
  }
`;
