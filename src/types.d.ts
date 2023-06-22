export interface CountryInfoProps {
  country: Country | null;
  flagUrl: string | null;
}
export interface CountryListProps {
  countries: Country[];
  onCountrySelect: (alpha3Code: string) => void;
}
export interface Country {
  name: string;
  alpha3Code: string;
  borders: string[];
  capital: string;
  population: number;
}
