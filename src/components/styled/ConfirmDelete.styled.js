import styled from "styled-components";

export const ConfirmDeleteStyled = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.75);

  ul {
    margin: 0.5em;
    li {
      list-style-type: none;
      margin-bottom: 1em;
    }
  }

  & .outer-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    padding: 0.125em;

    background: ${({ theme }) => theme.error};

    & .inner-wrapper {
      border-radius: 3px;
      background: ${({ theme }) => theme.background.dark};
      padding: 1.5em 1em;
      text-align: center;
      width: 75vw;
      max-width: 550px;

      & p {
        margin: 0 0 1em;
      }

      & button {
        font-size: 1rem;

        &:first-child {
          margin-right: 1em;
        }
      }
    }
  }
`;
