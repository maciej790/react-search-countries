import React from "react";
import { Item, Image, Description, Title } from "./StyledCountryItem";

export const CountryItem = () => {
  return (
    <Item>
      <Image />
      <Description>
        <Title>
          <h3>Germany</h3>
        </Title>
        <p>Population: 81,770,900</p>
        <p>Region: Europe</p>
        <p>Capital: Berlin</p>
      </Description>
    </Item>
  );
};
