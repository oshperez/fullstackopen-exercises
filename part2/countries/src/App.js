import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/all").then((res) => {
      const fetchedCountries = res.data;
      setCountries(fetchedCountries);
    });
  }, []);

  useEffect(() => {
    if (filter) {
      const regex = new RegExp(`${filter}`, "i");
      const newMatches = countries.filter((country) =>
        regex.test(country.name)
      );
      setMatches(newMatches);
    } else {
      setMatches([]);
    }
  }, [filter]);

  return (
    <>
      <Filter filter={filter} handleChange={(e) => setFilter(e.target.value)} />
      {matches.length > 10 ? (
        <p>Too many maches, specify another filter</p>
      ) : (
        <CountryList countries={matches} />
      )}
    </>
  );
};

export default App;
