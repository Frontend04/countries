import React, { useEffect, useState } from "react";
import { Country } from "../types";
import CountryList from "../components/CountryList";
import CountryInfo from "../components/CountryInfo";

const CountryPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [flagUrl, setFlagUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=alpha3Code,name")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleCountrySelect = (alpha3Code: string) => {
    setLoading(true);
    fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 404) {
          setSelectedCountry(null);
        } else {
          setSelectedCountry(data);
          setFlagUrl(
            `http://146.185.154.90:8080/restcountries/data/${alpha3Code.toLowerCase()}.svg`
          );
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <CountryList
          countries={countries}
          onCountrySelect={handleCountrySelect}
        />
      </div>
      <div className="content">
        <CountryInfo country={selectedCountry} flagUrl={flagUrl} />
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default CountryPage;
