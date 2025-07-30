import InfoBox from "../atoms/InfoBox/InfoBox";
import "./HealthInfo.scss";

function HealthInfo() {
  return (
    <section className="health-info">
      <div className="health-info__container">
        <InfoBox
          id="max-hp"
          text="Max HP"
          mainClassName="health-info__box health-info__box--row"
        />
        <InfoBox
          id="alt-max-hp"
          text="Alt Max HP"
          mainClassName="health-info__box health-info__box--row"
        />
      </div>
      <div className="health-info__container">
        <InfoBox
          id="current-hp"
          text="Current HP"
          mainClassName="health-info__box"
        />
        <InfoBox id="temp-hp" text="Temp HP" mainClassName="health-info__box" />
      </div>
      <div className="health-info__container">
        <InfoBox
          id="hit-dice"
          text="Hit Dice"
          mainClassName="health-info__box"
        />
        <div className="health-info__wrapper">
          <label htmlFor="">Successes</label>
          <div>Success Check Boxes</div>
          <label htmlFor="">Failures</label>
          <div>Falure Check Boxes</div>
          <p>Death Saves</p>
        </div>
      </div>
    </section>
  );
}

export default HealthInfo;
