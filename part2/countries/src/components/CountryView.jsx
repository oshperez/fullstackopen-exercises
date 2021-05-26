const CountryView = ({ country }) => {
  const { name, capital, population, languages, flag } = country;
  
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h2>languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={flag}
        alt={`${name}'s flag`}
        style={{ width: 200, height: 150 }}
      />
    </div>
  );
};

export default CountryView;
