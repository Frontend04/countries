import React from "react";
import { CountryInfoProps } from "../types";

const CountryInfo: React.FC<CountryInfoProps> = ({ country, flagUrl }) => {
  if (!country) {
    return <div className="no-country"><h2>Выберите страну</h2></div>;
  }

  const { name, capital, population, borders } = country;

  return (
    <div>
      <h2>Информация о стране</h2>
      <div className="countryInfo">
        {flagUrl && <img src={flagUrl} alt="Flag" />}
        <h3>{name}</h3>
        <p>Столица: {capital || "Нет данных"}</p>
        <p>Население: {population || "Нет данных"}</p>
        <p>
          Граничит с:{" "}
          {borders && borders.length > 0 ? borders.join(", ") : "Нет данных"}
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;