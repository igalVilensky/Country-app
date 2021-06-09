import React from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const {
      name,
      region,
      flag,
      capital,
      population,
      subregion,
      area,
      timezones,
      borders,
    } = obj;
    return (
      <div key={i} className="result">
        `<h1>{name}</h1>
        <p>
          {name} is a country located in {region} ({subregion} subregion) and
          shares borders with:{" "}
          {borders.map((border, i) => (
            <i
              key={i}
              className="country-link"
              onClick={() => getCountry("name", border)}
            >
              &nbsp;&nbsp; {border}
            </i>
          ))}
          . <br />
          {name}'s capital city is {capital} and its area is {area} km
          <sup>2</sup>. The population of {name} is {population}. The timezone
          for {name} is {timezones}
        </p>
        <img src={flag} alt={name} className="flag" /> `
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
