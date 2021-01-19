import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: "Atlanta" }
    }
  );

  if (error) return <h2>Error Found</h2>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h2>Search Weather</h2>
      <input type="text" placeholder="City Name..." />
      <button onClick={() => getWeather()}>Search Weather</button>
    </div>
  );
};

export default Home;
