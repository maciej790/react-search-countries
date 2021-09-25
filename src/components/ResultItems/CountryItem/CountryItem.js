import { Item, Image, Description, Title } from "./StyledCountryItem";

export const CountryItem = () => {
  return (
    <Item>
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
