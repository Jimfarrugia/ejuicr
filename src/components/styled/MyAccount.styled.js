import styled from "styled-components";

export const MyAccountStyled = styled.div`
  button {
    font-size: 1rem;
  }

  .user-picture {
    background: ${({ theme }) => theme.border.main};
    border-radius: 100%;
    width: fit-content;
    line-height: 0;
    margin: 1.5em auto;
    padding: 3px;

    & > img {
      border-radius: 100%;
      max-width: 96px;
      height: auto;
    }
  }

  .profile {
    margin-top: 2em;
    text-align: center;

    p {
      font-size: 1.15rem;

      &:last-child {
        button {
          margin-top: 0.5em;
        }
      }
    }
  }

  .linked-accounts {
    @media (min-width: 500px) {
      display: flex;
    }

    & > div {
      display: flex;

      &:first-child {
        padding-bottom: 1.5em;
      }

      @media (min-width: 500px) {
        width: 50%;

        &:first-child {
          padding-right: 1.5em;
          padding-bottom: 0;
        }
      }

      img {
        width: 48px;
        height: auto;
        margin-right: 1.25em;
        margin-top: 1em;
      }

      h5 {
        color: ${({ theme }) => theme.text.main};
      }

      h6 {
        margin: 0;
        font-size: 0.8rem;
      }

      p {
        margin: 0;
        font-size: 0.8rem;

        button {
          background: none;
          padding: 0.25em 0 0;
          margin: 0;
          color: ${({ theme }) => theme.error};

          &:hover {
            color: ${({ theme }) => theme.text.hover};
          }
        }
      }
    }
  }

  .error-message,
  .success-message {
    margin: 0 0 1em;
  }

  .input-border {
    margin-bottom: 1em;
  }
`;
