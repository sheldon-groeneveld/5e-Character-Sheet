import "./ProficiencyAndInspiration.scss";
import InfoBox from "../atoms/InfoBox/InfoBox";

function ProficiencyAndInspiration() {
  return (
    <section className="prof-inspo">
      <InfoBox
        id={"proficiency-bonus"}
        text={"Proficiency Bonus"}
        mainClassName="prof-inspo__box--row"
      />
      <InfoBox
        id={"inpiration"}
        text={"Inspiration"}
        mainClassName="prof-inspo__box--row"
      />
    </section>
  );
}

export default ProficiencyAndInspiration;
