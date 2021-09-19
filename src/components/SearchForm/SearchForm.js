import React from "react";
import {
  StyledForm,
  SearchInput,
  Icon,
  InputWrapper,
  SelectInput,
  SelectWrapper,
} from "./StyledSearchForm.js";
import { FaSearch } from "react-icons/fa";

export const SearchForm = () => {
  return (
    <StyledForm>
      <InputWrapper>
        <Icon>
          <FaSearch />
        </Icon>
        <SearchInput name="inp" placeholder="Search for a country..." />
      </InputWrapper>
      <SelectWrapper>
        <SelectInput>
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
