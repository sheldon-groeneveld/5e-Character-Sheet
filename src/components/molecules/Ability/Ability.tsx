import "./Ability.scss";

import skillsData from "../../../../data/skills.json";
import InfoBox from "../../atoms/InfoBox/InfoBox";
import Skill from "../../atoms/Skill/Skill";

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
      <div className="ability__container">
        <p className="ability__modifier"></p>
        <InfoBox id={id} text={id} mainClassName="ability__score" />
      </div>
      <div className="ability__wrapper">
        <ul className="ability__list">
          {selectedAbility
            ? selectedAbility.skills.map((skill) => (
                <Skill
                  key={selectedAbility.skills.indexOf(skill)}
                  name={skill.name}
                  proficiency={skill.proficiency}
                />
              ))
            : "Error Loading Skills"}
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default Ability;
