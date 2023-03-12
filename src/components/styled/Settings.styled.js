import styled from "styled-components";
import { colors } from "../../constants";

export const SettingsStyled = styled.div`
  .form-row {
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:last-child {
      display: flex;
      align-items: center;
      padding-left: 0.5em;

      .label-left {
        margin-right: 0.25em;
      }

      .label-right {
        margin-left: 0.25em;
      }

      .label-between {
        margin: 0 0.25em;
      }

      & > div:last-child {
        margin-left: 0.5em;
      }
    }

    .radio-label {
      input[type="radio"] {
        margin-right: 0.5em;

        &:hover {
          background: green;
        }
      }

      &:first-child {
        padding-right: 1em;
      }
    }

    select {
      color: ${colors.white};
      background: ${colors.grayDark};
      border: 0.125em solid ${colors.cyan};
      border-radius: 3px;
      font-size: 1rem;
      padding: 0.25em 0.5em;
      outline: none;

      &:focus {
        border-color: ${colors.pink};
      }
    }

    .toggle {
      font-size: 2rem;
      color: ${colors.red};
      margin-left: 0.25em;

      &.on {
        color: ${colors.green};
      }
      &.off {
        color: ${colors.red};
        transform: rotate(180deg);
      }
    }
  }

  .button-row {
    display: flex;
    flex-direction: row-reverse;
    padding: 1em 0.5em 0;

    button {
      font-size: 1rem;

      svg {
        font-size: 1.125rem;
        margin-right: 0.5em;
      }
    }
  }
`;
