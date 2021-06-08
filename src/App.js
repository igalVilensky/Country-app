import React, { useState, useEffect } from "react";

import "./scss/main.scss";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

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
    let endPoint = `https://restcountries.eu/rest/v2/name/${userInput}`;
    // console.log(textToUrl);

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`You have an ${err}`));
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Please write a country name"
        />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
}

export default App;