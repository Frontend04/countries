import React, { useEffect, useState } from 'react'
import { Country } from '../types';

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
  
  return (
    <div>
      
    </div>
  )
}

export default CountryPage
