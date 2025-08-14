import Ability from "../atoms/Ability/Ability";
import "./Abilities.scss";

function Abilities() {
  return (
    <section>
      <Ability id={"Strength"} />
      <Ability id={"Dexterity"} />
      <Ability id={"Constitution"} />
      <Ability id={"Intelligence"} />
      <Ability id={"Wisdom"} />
      <Ability id={"Charisma"} />
    </section>
  );
}

export default Abilities;
