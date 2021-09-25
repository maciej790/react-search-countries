import styled from "styled-components";
import { colors } from "./Variables";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${colors.White};
  ${props => props.theme === 'light' && `color: ${colors.VeryDarkBlue2}`};
  background-color: ${colors.VeryDarkBlue1};
  ${props => props.theme === 'light' && `background-color: ${colors.VeryLightGray}`};

`;
