import Title from "./components/Title";
import Setup from "./examples/5-custom-instance";
import "./axios/global";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [theLanguage, setTheLanguage] = useState();
  const fetchApi = async () => {
    try {
      const values = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(values.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const countryLanguage = (country) => {
    const theCountry = countries?.filter(
      (item) => item.name.official === country
    );
    const languages = theCountry.map((country) => country.languages);
    setTheLanguage(...languages);
  };

  const onChangeHandler = (e) => {
    setCountry(e.target.value);
    countryLanguage(country);
  };
  console.log(theLanguage);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <main>
      <select onChange={onChangeHandler}>
        {countries?.map((country) => (
          <option value={country.name.official} key={country.name.official}>
            {country.name.official}
          </option>
        ))}
      </select>
    </main>
  );
}

export default App;
