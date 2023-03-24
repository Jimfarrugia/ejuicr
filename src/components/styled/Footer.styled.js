import styled from "styled-components";
import { layoutWidth } from "../../constants";

export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.background.dark};
  padding: 2em 1em 0;
  margin-top: 2em;

  & > .container {
    display: flex;
    justify-content: space-between;
    max-width: ${layoutWidth};
    margin: 0 auto;

    & > div {
      position: relative;
    }
  }

  & ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    z-index: 1;
  }

  & li {
    margin-bottom: 1em;

    &:last-child {
      margin: 0;
    }
  }

  & img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
  }

  & .fine-print {
    margin: 0;
    padding: 1em 0;
    text-align: center;
    color: ${({ theme }) => theme.hr};

    & > a {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.hr};
    }
  }
`;
