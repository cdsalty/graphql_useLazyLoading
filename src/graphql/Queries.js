import { gql } from "@apollo/client";
// You want to make a query to the function, getCityByName. It takes one arguement, which is name and it's type is a string.
// Then recall it with the name as the type.
// you want name to be equal to the name property
export const GET_WEATHER_QUERY = gql`
  query getCityByName(name: String!) { 
    getCityByName(name: $name) {  
      name
      country
      weather {
        summary {
          title
          description
          icon
        } 
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;
