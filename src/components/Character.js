import { useCharacter } from "../hooks/useCharacter";
import { useParams, Link } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log(error, loading, data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong</div>;
  return (
    <div className="character">
      <img src={data.character.image} alt="xyz" width={450} height={450} />
      <div>
        <Link to="/">Back</Link>
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className="episodes">
          {data.character.episode.map((ep, index) => (
            <p key={index}>
              {ep.name} - <b>{ep.episode}</b>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
