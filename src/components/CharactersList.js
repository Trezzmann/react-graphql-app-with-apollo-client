import { gql, useQuery } from "@apollo/client";

const GET_CARACTERS = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { error, loading, data } = useQuery(GET_CARACTERS);

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="characters">
      {data.characters.results.map((result) => (
        <div>
          <img src={result.image} alt="avatar" />
          <h2>{result.name}</h2>
        </div>
      ))}
    </div>
  );
}
