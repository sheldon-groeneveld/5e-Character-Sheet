import "./ExtraProficiencies.scss";
import InfoBox from "../atoms/InfoBox/InfoBox";

function ExtraProficiencies() {
  return (
    <section className="extra-proficiencies">
      <InfoBox id={"tools"} text={"Tool Proficiencies"} />
      <InfoBox id={"languages"} text={"Languages"} />
    </section>
  );
}

export default ExtraProficiencies;
