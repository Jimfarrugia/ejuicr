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
    text-align: center;

    p {
      font-size: 1.15rem;
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
