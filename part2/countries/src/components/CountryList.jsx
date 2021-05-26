import Country from "./Country";
import Weather from "./Weather";

const CountryList = ({ countries }) => {
  if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} show={true} />
        <Weather city={countries[0].capital} />
      </div>
    );
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      {countries.map((country) => (
        <Country key={country.numericCode} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
