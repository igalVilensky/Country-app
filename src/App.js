import React, { useState, useEffect } from "react";

import "./scss/main.scss";
import axios from "axios";
import Country from "./components/Country";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function submitHandle(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    // console.log(textToUrl);

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`You have an ${err}`));
    console.log(results);
  }
  return (
    <div className="app__main">
      <h1 className="heading">Countries database app</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Please write a country name"
        />
        <button type="submit">Search</button>
      </form>
      <Country results={results} />
    </div>
  );
}

export default App;
