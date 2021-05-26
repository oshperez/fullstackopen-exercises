import { useState } from "react";
import CountryView from "./CountryView";
import Button from "./Button";

const Country = ({ country, show=false }) => {
  const [showView, setShowView] = useState(show);
  const toggleView = () => {
    setShowView(!showView);
  };
  return (
    <div>
      {showView ? (
        <CountryView country={country} />
      ) : (
        <span>{country.name}</span>
      )}

      <Button label={showView ? "hide" : "show"} handleClick={toggleView} />
    </div>
  );
};

export default Country;
