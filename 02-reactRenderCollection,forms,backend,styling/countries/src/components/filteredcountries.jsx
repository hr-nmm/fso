import axios from "axios";
const FilteredCountries = ({ filteredCountries, setcountryDetails }) => {
  if (filteredCountries === null) {
    return null;
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return (
      <ul>
        {" "}
        {filteredCountries.map((country, sno) => (
          <li key={sno}>
            {country}{" "}
            <button
              onClick={() => {
                console.log(`clicked`);
                axios
                  .get(
                    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
                  )
                  .then((response) => {
                    setcountryDetails(response.data);
                  })
                  .catch((error) => console.log(`error catch : ${error}`));
              }}
            >
              show
            </button>
          </li>
        ))}
      </ul>
    );
  }
};
export default FilteredCountries;
