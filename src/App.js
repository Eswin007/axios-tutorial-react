import Title from "./components/Title";
import Setup from "./examples/5-custom-instance";
import "./axios/global";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  const fetchApi = async () => {
    const values = await axios.get("https://restcountries.com/v3.1/all");
    console.log(values.data);
    setCountries(values.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const onChangeHandler = (e) => {};

  return (
    <main>
      <select name="" id="">
        {countries?.map((country) => (
          <option key={country.name}>{country.name.common}</option>
        ))}
      </select>
    </main>
  );
}

export default App;
