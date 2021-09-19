import React from "react";
import { AppHeader } from "../../components/AppHeader/AppHeader.js";
import { ResultItems } from "../../components/ResultItems/ResultItems.js";
import { SearchForm } from "../../components/SearchForm/SearchForm.js";
import { Wrapper } from "./StyledHome.js";

export const Home = () => {
  return (
    <Wrapper>
      <AppHeader />
      <SearchForm />
      <ResultItems />
    </Wrapper>
  );
};
