import "./CombatStats.scss";
import InfoBox from "../atoms/InfoBox/InfoBox";

function CombatStats() {
  return (
    <section className="combat-stats">
      <InfoBox id={"armor-class"} text={"Armor Class"} />
      <InfoBox id={"initiative"} text={"Initiative"} />
      <InfoBox id={"speed"} text={"Speed"} />
    </section>
  );
}

export default CombatStats;
