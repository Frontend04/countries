export interface CountryInfoProps {
    country: Country | null;
    flagUrl: string | null;
}
export interface CountryListProps {
    countries: Country[];
    onCountrySelect: (alpha3Code: string) => void;
}