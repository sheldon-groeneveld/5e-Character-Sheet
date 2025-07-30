import { useParams } from "react-router-dom";
import { useState } from "react";

import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import HealthInfo from "../../components/HealthInfo/HealthInfo";

function CharacterPage() {
  const { CharacterName } = useParams();
  const [character, setCharacter] = useState(null);

  // if (character === null) {
  //   return <p>Loading Character...</p>;
  // }

  return (
    <>
      <main>
        <CharacterInfo />
        <HealthInfo />
      </main>
    </>
  );
}

export default CharacterPage;
