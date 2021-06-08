import React from "react";

function Country({ results }) {
  const lands = results.map((obj, i) => {
    const {
      name,
      topLevelDomain,
      alphaCode,
      alpha3Code,
      callingCodes,
      capital,
      altSpellings,
      region,
      subregion,
      population,
      timezones,
      borders,
      nativeName,
      currencies,
      symbol,
      languages,
    } = obj;
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h2>{topLevelDomain}</h2>
        <h2>{alphaCode}</h2>
        <h2>{alpha3Code}</h2>
        <h2>{callingCodes}</h2>
        <h2>{capital}</h2>
        <h2>{altSpellings}</h2>
        <h2>{region}</h2>
        <h2>{subregion}</h2>
        <h2>{population}</h2>
        <h2>{timezones}</h2>
        <h2>{borders}</h2>
        <h2>{nativeName}</h2>
        <h2>{currencies}</h2>
        <h2>{symbol}</h2>
        <h2>{languages}</h2>
      </div>
    );
  });
  return <React.Fragment>{lands}</React.Fragment>;
}

export default Country;
