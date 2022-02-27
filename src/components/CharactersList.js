import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <h1>Characters</h1>
      <div className="characters">
        {data.characters.results.map((result, index) => (
          <div key={index}>
            <img src={result.image} alt="avatar" />
            <h2>{result.name}</h2>
            <Link to={`/${result.id}`}>learn more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
