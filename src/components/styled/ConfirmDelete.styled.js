import styled from "styled-components";
import { colors } from "../../constants";

export const ConfirmDeleteStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.75);

  & .outer-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    padding: 0.125em;

    background: ${colors.purpleCyan};

    & .inner-wrapper {
      border-radius: 3px;
      background: ${colors.black};
      padding: 1.5em 1em;
      text-align: center;
      width: 75vw;

      & p {
        margin: 0 0 1em;
      }

      & button {
        font-size: 1rem;

        &:first-child {
          margin-right: 1em;
          //   margin-bottom: 1em;
        }
      }
    }
  }
`;
