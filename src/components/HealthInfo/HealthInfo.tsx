import InfoBox from "../atoms/InfoBox/InfoBox";
import "./HealthInfo.scss";

function HealthInfo() {
  return (
    <section className="health-info">
      <div className="health-info__container">
        <InfoBox
          id="max-hp"
          text="Max HP"
          mainClassName="health-info__box--row"
        />
        <InfoBox
          id="alt-max-hp"
          text="Alt Max HP"
          mainClassName="health-info__box--row"
        />
      </div>
      <div className="health-info__container">
        <InfoBox id="current-hp" text="Current HP" />
        <InfoBox id="temp-hp" text="Temp HP" />
      </div>
      <div className="health-info__container">
        <InfoBox
          id="total-hit-dice"
          text="Total"
          mainClassName="health-info__box--row"
        />
        <p className="health-info__box">Successes</p>
      </div>
      <div className="health-info__container">
        <InfoBox id="hit-dice" text="Hit Dice" />
        <div className="health-info__wrapper">
          <div className="health-info__check-boxes">
            <span>Box 1 </span>
            <span>Box 2 </span>
            <span>Box 3 </span>
          </div>
          <p>Failures</p>
          <div className="health-info__check-boxes">
            <span>Box 1 </span>
            <span>Box 2 </span>
            <span>Box 3 </span>
          </div>
          <p>Death Saves</p>
        </div>
      </div>
    </section>
  );
}

export default HealthInfo;
