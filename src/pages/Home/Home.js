import { useState } from "react";
import { AppHeader } from "../../components/AppHeader/AppHeader.js";
import { ResultItems } from "../../components/ResultItems/ResultItems.js";
import { SearchForm } from "../../components/SearchForm/SearchForm.js";
import { Wrapper } from "./StyledHome.js";

export const Home = () => {
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ [name]: value });
  };

  return (
    <Wrapper>
      <AppHeader />
      <SearchForm handleChange={handleChange} />
      <ResultItems param={formValues} />
    </Wrapper>
  );
};
