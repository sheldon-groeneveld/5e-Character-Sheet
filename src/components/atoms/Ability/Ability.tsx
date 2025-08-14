import "./Ability.scss";

import skillsData from "../../../../data/skills.json";
import InfoBox from "../InfoBox/InfoBox";

interface props {
  id: string;
}

function Ability({ id }: props) {
  interface Skill {
    name: string;
    proficiency: number;
  }

  interface AbilityData {
    ability: string;
    skills: Skill[];
  }

  let selectedAbility: AbilityData | undefined = skillsData.find(
    ({ ability }) => ability == id
  );
  console.log(selectedAbility);

  return (
    <section className="ability">
      <div className="ability__wrapper">
        <InfoBox id={id} text={id} />
      </div>
      <div className="ability__wrapper">
        <ul className="ability__list">
          {selectedAbility
            ? selectedAbility.skills.map((skill) => (
                <li className="ability__item">{skill.name}</li>
              ))
            : "Error Loading Skills"}
        </ul>
      </div>
    </section>
  );
}

export default Ability;
