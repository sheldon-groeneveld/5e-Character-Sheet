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
      <div className="ability__container">
        <p className="ability__modifier"></p>
        <InfoBox id={id} text={id} mainClassName="ability__score" />
      </div>
      {/* <InfoBox id={id} text={id} /> */}
      <div className="ability__wrapper">
        <ul className="ability__list">
          {selectedAbility
            ? selectedAbility.skills.map((skill) => (
                <li
                  className="ability__item"
                  key={selectedAbility.skills.indexOf(skill)}
                >
                  <span className="ability__checkbox"></span>
                  <span className="ability__proficiency">
                    {skill.proficiency}
                  </span>
                  <span className="ability__skill-name">{skill.name}</span>
                </li>
              ))
            : "Error Loading Skills"}
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default Ability;
