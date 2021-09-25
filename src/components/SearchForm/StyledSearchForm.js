import styled from "styled-components";
import { colors } from "../../style/Variables.js";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  ${props => props.theme === 'light' && `color: ${colors.DarkGray}`};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background-color: ${colors.DarkBlue};
  ${props => props.theme === 'light' && `background-color: ${colors.White}`};
  ${props => props.theme === 'light' && `color: ${colors.DarkGray}`};
  border-radius: 5px;
  text-align: center;
  padding-left: 20px;
  color: ${colors.White};
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.05);

  ::placeholder {
    color: ${colors.White};
    ${props => props.theme === 'light' && `color: ${colors.DarkGray}`};
  }
`;

export const SelectWrapper = styled.div`
  width: 90%;
  margin-top: 50px;
`;

export const SelectInput = styled.select`
  width: 50%;
  height: 50px;
  border: none;
  outline: none;
  padding: 0 0 0 10px;
  background-color: ${colors.DarkBlue};
  ${props => props.theme === 'light' && `background-color: ${colors.White}`};
  border-radius: 5px;
  color: ${colors.White};
  ${props => props.theme === 'light' && `color: ${colors.VeryDarkBlue2}`};
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.05);
`;
