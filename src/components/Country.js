import React from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((items, i) => {
    /*     console.log(results, "results");
     */ // console.log(getCountry, "getCountry");
    console.log(items);
    const {
      region,
      name,
      capital,
      population,
      subregion,
      area,
      timezones,
      borders,
      flag,
    } = items;

    return (
      <div key={i} className="result">
        <h1>{name.common}</h1>
        <p>
          {name.common} is a country located in {region} and {subregion}{" "}
          subregion and shares borders with:
          {borders?.map((border, i) => (
            <i
              key={i}
              className="country-link"
              onClick={() => getCountry("name", border)}
            >
              &nbsp;&nbsp; {border}
            </i>
          ))}
          . <br />
          {name.common}'s capital city is {capital[0]} and its area is
          {area} km
          <sup>2</sup>. The population of {name.common} is {population}. The
          timezone for {name.common} is {timezones[0]}
        </p>
        {/* <img src={flag} alt={name.common} className="flag" />  */}
        <div>{flag}</div>
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
