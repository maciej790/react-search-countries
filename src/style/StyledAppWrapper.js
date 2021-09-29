import styled from "styled-components";
import { colors } from "./Variables";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) =>
    theme === "light" ? colors.VeryDarkBlue2 : colors.White};
  background-color: ${({ theme }) =>
    theme === "light" ? colors.VeryLightGray : colors.VeryDarkBlue1};
`;
