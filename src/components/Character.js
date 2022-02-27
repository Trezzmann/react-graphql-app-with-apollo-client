import { useCharacter } from "../hooks/useCharacter";
import { useParams, Link } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log(error, loading, data);

  if (loading) return <div>loading</div>;
  if (error) return <div>something went wrong</div>;
  return (
    <div>
      <h2>{data.character.name}</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
