import styled from "styled-components";
import { colors } from "../../constants";

export const DeleteButtonStyled = styled.button`
  width: 35px;
  height: 35px;
  background: ${colors.red};
  & > svg {
    font-size: 18px;
    margin: 0 0 -1px -1px;
  }
`;
