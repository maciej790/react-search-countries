import React from "react";
import {
  StyledForm,
  SearchInput,
  Icon,
  InputWrapper,
} from "./StyledSearchForm.js";
import { FaSearch } from "react-icons/fa";

export const SearchForm = () => {
  return (
    <StyledForm>
      <InputWrapper>
        <Icon>
          <FaSearch />
        </Icon>
        <SearchInput placeholder="Search for a country..." />
      </InputWrapper>
    </StyledForm>
  );
};
