import { useContext } from "react";
import { Item, Image, Description, Title } from "./StyledCountryItem";
import { ThemeContext } from "../../../lib/ContextTheme.js";

export const CountryItem = ({ result }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Item theme={theme}>
      <Image src={result.flags.png} />
      <Description>
        <Title>{result.name.common}</Title>
        <p>Population: {result.population}</p>
        <p>Region: {result.region}</p>
        <p>Capital: {result.capital}</p>
      </Description>
    </Item>
  );
};
