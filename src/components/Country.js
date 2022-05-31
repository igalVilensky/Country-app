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
      <div className="result-table" key={i}>
        <div>
          <h1>{name.common} Geography</h1>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Geographic Location</div>
          <div className="inner-row">{region}</div>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Total Area</div>
          <div className="inner-row">
            {area} km <sup>2</sup>
          </div>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Border Countries</div>
          <div className="inner-row">{borders}</div>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Time Zone</div>
          <div className="inner-row">{timezones[0]}</div>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Capital City</div>
          <div className="inner-row">{capital[0]}</div>
        </div>
        <div className="result-row">
          <div className="inner-row-left">Population</div>
          <div className="inner-row">{population}</div>
        </div>
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;

// <div key={i} className="result">
//   <h1>{name.common} </h1>
//   <p className="text">
//     {name.common} is a country located in {region} and {subregion}{" "}
//     subregion and shares borders with{borders ? ":" : ""}
//     {borders
//       ? borders.map((border, i) => (
//           <i
//             key={i}
//             className="country-link"
//             onClick={() => getCountry("name", border)}
//           >
//             &nbsp;&nbsp; {`${border}`}
//           </i>
//         ))
//       : " no other country."}
//     <br />
//     {name.common}'s capital city is {capital[0]} and its area is {area} km
//     <sup>2</sup>. The population of {name.common} is {population}. The
//     timezone for {name.common} is {timezones[0]}
//   </p>
//   {/* <img src={flag} alt={name.common} className="flag" />  */}
//   <div className="flag">{flag}</div>
// </div>
