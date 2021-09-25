import { useContext } from "react";
import {
  StyledForm,
  SearchInput,
  Icon,
  InputWrapper,
  SelectInput,
  SelectWrapper,
} from "./StyledSearchForm.js";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../lib/ContextTheme.js";
export const SearchForm = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <StyledForm>
      <InputWrapper>
        <Icon theme={theme}>
          <FaSearch />
        </Icon>
        <SearchInput name="inp" placeholder="Search for a country..." theme={theme}/>
      </InputWrapper>
      <SelectWrapper>
        <SelectInput theme={theme}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </SelectInput>
      </SelectWrapper>
    </StyledForm>
  );
};
