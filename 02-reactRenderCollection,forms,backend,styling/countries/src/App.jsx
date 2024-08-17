import axios from "axios";
import { useEffect, useState } from "react";
import CountryDetails from "./components/countrydetails";
import FilteredCountries from "./components/filteredcountries";

const App = () => {
  // states
  const [countries, setCountries] = useState([]); // array: all countries name
  const [countryDetails, setcountryDetails] = useState(null); // object: a particular country's details
  const [filteredCountries, setFilteredCountries] = useState(null); // array: filtered country names
  // getdata(country names)
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        const data = response.data;
        setCountries(data.map((val) => val.name.common.toLowerCase()));
      });
  });

  // methods
  const handleFilter = (event) => {
    const filteredCountries = countries.filter((country) =>
      country.includes(event.target.value)
    );
    const sizeOfFilteredCountries = filteredCountries.length;
    if (sizeOfFilteredCountries === 1) {
      axios
        .get(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${filteredCountries[0]}`
        )
        .then((response) => {
          setcountryDetails(response.data);
          setFilteredCountries(null);
        })
        .catch((error) => console.log(`error catch : ${error}`));
    } else {
      setcountryDetails(null);
      setFilteredCountries(filteredCountries);
    }
  };

  return (
    <>
      filter countries
      <input onChange={handleFilter} />
      <FilteredCountries
        filteredCountries={filteredCountries}
        setcountryDetails={setcountryDetails}
      />{" "}
      <CountryDetails countryDetails={countryDetails} />
    </>
  );
};
export default App;
