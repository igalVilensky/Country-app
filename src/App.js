import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import "./scss/main.scss";
import axios from "axios";
import Country from "./components/Country";

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
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    // console.log(textToUrl);

    axios(endPoint)
      .then(({ data }) => setResults(data))
      .catch((err) => console.log(`You have an ${err}`));
    console.log(results);
  }

  if (loading) return <Loading />;
  return (
    <div className="app__main">
      <h1 className="heading">Countries Database App</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Please enter country name"
        />
        <button type="submit">Search</button>
      </form>
      <Country results={results} />
    </div>
  );
}

export default App;
