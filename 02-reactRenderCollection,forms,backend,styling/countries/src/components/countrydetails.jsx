const CountryDetails = ({ countryDetails }) => {
  if (countryDetails === null) {
    return null;
  } else {
    const languages = [];
    Object.entries(countryDetails.languages).map((entry) =>
      languages.push(entry[1])
    );
    const flag = countryDetails.flags.png;
    return (
      <>
        <h3>NAME: {countryDetails.name.common}</h3>
        <p>capital: {countryDetails.capital[0]}</p>
        <p>area: {countryDetails.area}</p>
        <ul>
          {languages.map((language, sno) => (
            <li key={sno}>{language}</li>
          ))}
        </ul>
        <img src={flag} alt="flag" />
        <h3>Weather in {countryDetails.capital[0]}</h3>
      </>
    );
  }
};
export default CountryDetails;
