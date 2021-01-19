import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {
  // input form state
  const [citySearch, setCitySearch] = useState("");

  // const [getWeather, { loading, data, error }] = useLazyQuery( // did not use loading
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    // variables: { name: "Atlanta" }
    variables: { name: citySearch }
  });

  if (error) return <h2>Error Found</h2>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h2>Search Weather</h2>
      {/* by defining the onChange with the target value, I can remove the hardcoded value of "atlanta and set it as the state" */}
      <input
        type="text"
        placeholder="City Name..."
        onChange={e => setCitySearch(e.target.value)}
      />
      <button onClick={() => getWeather()}>Search Weather</button>
      {/* ONLY SHOW FORM IF THERE'S NO DATA */}
      {data && (
        <>
          <h3>City Name: {data.getCityByName.name}</h3>
          <h3>Temperature: {data.getCityByName.weather.temperature.actual}</h3>
          <h3>Description: {data.getCityByName.weather.summary.description}</h3>
          <h3>Wind Speed: {data.getCityByName.weather.wind.speed}mph</h3>
        </>
      )}
    </div>
  );
};

export default Home;
