import styled from "styled-components";
// import { colors } from "../../constants";

export const IngredientsStyled = styled.div`
  & > h3 {
    margin-top: 1em;
  }

  & > .row {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr;
    grid-gap: 1em;
    justify-items: end;

    & > div:first-child {
      justify-self: start;
    }
  }

  & .row.flavor-results {
    margin-bottom: 1em;
    grid-template-columns: 6fr 1fr;
    text-align: right;

    & > div:first-child {
      width: 100%;
    }
  }

  & .row.flavor {
    grid-template-columns: 4fr 1fr 1fr;

    & > div {
      display: flex;

      &:last-child > button:last-child {
        margin-left: 1em;
      }
    }
  }

  & .add-ingredient-btn {
    margin-left: 0.5em;
    font-size: 1rem;
  }
`;
