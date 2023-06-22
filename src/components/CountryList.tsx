import React from "react";
import { CountryListProps } from "../types";
import '../App.css'


const CountryList: React.FC<CountryListProps> = ({ countries, onCountrySelect }) => {
  return (
    <div>
      <h2>Страны</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <button onClick={() => onCountrySelect(country.alpha3Code)}>{country.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;