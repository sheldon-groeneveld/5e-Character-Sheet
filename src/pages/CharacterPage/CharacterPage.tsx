import { useParams } from "react-router-dom";
import { useState } from "react";

function CharacterPage() {
  const { CharacterName } = useParams();
  const [character, setCharacter] = useState(null);

  if (character === null) {
    return <p>Loading Character...</p>;
  }

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default CharacterPage;
