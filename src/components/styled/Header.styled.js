import styled from "styled-components";
import { colors, layoutWidth } from "../../constants";

export const HeaderStyled = styled.header`
  background: ${colors.black};
  padding: 1em 1em;
  margin-bottom: 1em;

  & > .container {
    display: flex;
    justify-content: space-between;
    max-width: ${layoutWidth};
    margin: 0 auto;
  }
`;

export const MenuButton = styled.button`
  color: ${colors.cyan};
  font-size: 1.35rem;
  padding: 0;
  margin: 0;
  background: none;
  border: none;

  &:hover {
    background: none;
  }
`;
