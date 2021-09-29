import styled from "styled-components";
import { colors } from "../../style/Variables.js";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.White : colors.DarkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;

export const SwitchTheme = styled.button`
  border: none;
  outline: none;
  height: 50px;
  background-color: transparent;
  color: ${({ theme }) =>
    theme === "light" ? colors.VeryDarkBlue2 : colors.White};
`;

export const Icon = styled.i`
  margin: 0 7px 0 0;
`;
