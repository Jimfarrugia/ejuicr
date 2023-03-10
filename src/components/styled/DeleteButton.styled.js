import styled from "styled-components";

export const DeleteButtonStyled = styled.button`
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.error};
  & > svg {
    font-size: 18px;
    margin: 0 0 -1px -1px;
  }
`;
