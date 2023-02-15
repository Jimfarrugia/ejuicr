import styled from "styled-components";
import { colors } from "../../constants";

export const FooterStyled = styled.footer`
  background: ${colors.black};
  padding: 2em 1em;

  & > .container {
    display: flex;
    justify-content: space-between;

    & > div {
      position: relative;
    }
  }

  & ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & li {
    margin-bottom: 0.75em;

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
`;