import "./Skill.scss";

interface props {
  key: number;
  name: string;
  proficiency: number;
}

function Skill({ key, name, proficiency }: props) {
  return (
    <li className="skill" key={key}>
      <span className="skill__checkbox"></span>
      <span className="skill__proficiency">{proficiency}</span>
      <span className="skill__name">{name}</span>
    </li>
  );
}

export default Skill;
