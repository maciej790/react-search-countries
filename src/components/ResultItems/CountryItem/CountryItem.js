import { useContext } from "react";
import { Item, Image, Description, Title } from "./StyledCountryItem";
import { ThemeContext } from "../../../lib/ContextTheme.js";

export const CountryItem = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Item theme={theme}>
      <Image />
      <Description>
        <Title>Germany</Title>
        <p>Population: 81,770,900</p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
      </Description>
    </Item>
  );
};
