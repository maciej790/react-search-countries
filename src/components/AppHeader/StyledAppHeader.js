import styled from "styled-components";
import { colors } from "../../style/Variables.js";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${colors.DarkBlue};
  ${props => props.theme === 'light' && `background-color: ${colors.White}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.05);
`;

export const SwitchTheme = styled.button`
  border: none;
  outline: none;
  height: 50px;
  background-color: transparent;
  color: ${colors.White};
  ${props => props.theme === 'light' && `color: ${colors.VeryDarkBlue2}`};
`;

export const Icon = styled.i`
  margin: 0 7px 0 0;
`;
