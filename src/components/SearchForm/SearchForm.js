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

export const SearchForm = ({ handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Icon>
          <FaSearch />
        </Icon>
        <SearchInput
          name="input"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </InputWrapper>
      <SelectWrapper>
        <SelectInput name="select" onChange={handleChange}>
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
