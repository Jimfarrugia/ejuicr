import styled from "styled-components";

export const SidemenuStyled = styled.nav`
  background: ${({ theme }) => theme.background.dark};
  padding: 1em;
  width: 250px;
  height: calc(100% - 2em);
  text-align: center;

  & .controls {
    display: flex;
    justify-content: space-between;
    text-align: right;

    & button {
      font-size: 1.35rem;
      color: ${({ theme }) => theme.text.link};
      background: none;
      padding: 0;
    }
  }

  & .logo {
    display: block;
    margin: 1em auto 2em;
    width: fit-content;
  }

  & hr {
    margin: 2em 0;
  }

  & ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & li {
    margin-bottom: 1.5em;

    & button {
      width: 184px;
      font-size: 0.9rem;
    }

    & button > svg {
      margin-right: 0.5em;
      margin-bottom: -0.0725em;
      font-size: 1.1rem;
    }
  }

  & h3 {
    margin: 0.5em auto;
  }

  p {
    margin: 0 0 1.5em;

    &.small {
      font-size: 0.9rem;
    }
  }

  .user-data {
    color: ${({ theme }) => theme.text.secondary};

    & p {
      font-size: 0.9rem;
    }

    & > p:first-child {
      margin: 0 0 0.5em;
    }

    & a {
      font-size: 1rem;
    }

    & svg {
      margin-right: 0.25em;
      margin-bottom: -0.125em;
    }

    .user-picture {
      background: ${({ theme }) => theme.border.main};
      border-radius: 100%;
      width: fit-content;
      line-height: 0;
      margin: 0 auto 0.5em;
      padding: 3px;

      & > img {
        border-radius: 100%;
        max-width: 64px;
        height: auto;
      }
    }
  }

  .error-message,
  .success-message {
    font-size: 0.9rem;
    margin: 0 1.25em 1.5em;
  }

  .sidemenu-form-row {
    margin-bottom: 1.5em;

    & > button {
      width: calc(50% - 2em);
      height: 35px;
      font-size: 0.95rem;

      &:first-child {
        margin-right: 1.5em;
      }
    }
  }
`;
