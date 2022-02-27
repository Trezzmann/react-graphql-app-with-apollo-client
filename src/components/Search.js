import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query getLoation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLocations, { error, loading, data }] = useLazyQuery(GET_LOCATIONS, {
    variables: { name }
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {data && (
        <div>
          {data.characters.results.map((loc, index) => (
            <p key={index}>{loc.location.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
