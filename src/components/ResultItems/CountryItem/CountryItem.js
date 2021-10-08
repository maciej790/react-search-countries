import { Item, Image, Description, Title } from "./StyledCountryItem";

export const CountryItem = ({ result }) => {
  return (
    <Item>
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
