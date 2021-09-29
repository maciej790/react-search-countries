import styled from "styled-components";
import { colors } from "../../../style/Variables";

export const Item = styled.div`
  width: 80%;
  height: 400px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.White : colors.DarkBlue};
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
`;

export const Description = styled.div`
  width: 100%;
  padding: 30px 0 0 30px;
  line-height: 170%;
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
`;
