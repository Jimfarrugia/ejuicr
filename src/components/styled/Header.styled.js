import styled from "styled-components";
import { colors } from "../../constants";

export const HeaderStyled = styled.header`
  background: ${colors.black};
  padding: 1em 0.5em;

  & > .container {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuButton = styled.button`
  color: ${colors.cyan};
  font-size: 1.35rem;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
`;
