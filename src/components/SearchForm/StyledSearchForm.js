import styled from "styled-components";
import { colors } from "../../style/Variables.js";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 50px;
  position: absolute;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background-color: ${colors.DarkBlue};
  border-radius: 5px;
  text-align: center;
  padding-left: 20px;
  color: ${colors.White};

  ::placeholder {
    color: ${colors.White};
  }
`;
