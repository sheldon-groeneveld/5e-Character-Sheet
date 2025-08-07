// import { useParams } from "react-router-dom";
// import { useState } from "react";

import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import HealthInfo from "../../components/HealthInfo/HealthInfo";
import CombatStats from "../../components/CombatStats/CombatStats";
import ExtraProficiencies from "../../components/ExtraProficiencies/ExtraProficiencies";

import "./CharacterPage.scss";
import ProficiencyAndInspiration from "../../components/ProficiencyAndInspiration/ProficiencyAndInspiration";

function CharacterPage() {
  // const { CharacterName } = useParams();
  // const [character, setCharacter] = useState(null);

  // if (character === null) {
  //   return <p>Loading Character...</p>;
  // }

  return (
    <>
      <main>
        <CharacterInfo />
        <ProficiencyAndInspiration />
        <section className="grouping-wrapper">
          <CombatStats />
          <ExtraProficiencies />
        </section>
        <HealthInfo />
      </main>
    </>
  );
}

export default CharacterPage;
