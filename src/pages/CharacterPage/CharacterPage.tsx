// import { useParams } from "react-router-dom";
// import { useState } from "react";

import "./CharacterPage.scss";

import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import HealthInfo from "../../components/HealthInfo/HealthInfo";
import CombatStats from "../../components/CombatStats/CombatStats";
import ExtraProficiencies from "../../components/ExtraProficiencies/ExtraProficiencies";
import ProficiencyAndInspiration from "../../components/ProficiencyAndInspiration/ProficiencyAndInspiration";
import Abilities from "../../components/Abilities/Abilities";
import CombatAttacks from "../../components/CombatAttacks/CombatAttacks";

function CharacterPage() {
  // const { CharacterName } = useParams();
  // const [character, setCharacter] = useState(null);

  // if (character === null) {
  //   return <p>Loading Character...</p>;
  // }

  return (
    <>
      <main className="character-page">
        <CharacterInfo />
        <section className="page-row">
          <ProficiencyAndInspiration />
          <section className="section-wrapper">
            <CombatStats />
            <ExtraProficiencies />
          </section>
          <HealthInfo />
        </section>
        <Abilities />
        <CombatAttacks />
      </main>
    </>
  );
}

export default CharacterPage;
