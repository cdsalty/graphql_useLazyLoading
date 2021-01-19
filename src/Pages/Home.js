import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {
  const [getWeather, { loading, error }] = useLazyQuery();

  return (
    <div className="home">
      <h2>Search Weather</h2>
      <input type="text" placeholder="City Name..." />
      <button>Search Now</button>
    </div>
  );
};

export default Home;
