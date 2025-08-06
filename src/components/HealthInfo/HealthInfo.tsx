import InfoBox from "../atoms/InfoBox/InfoBox";
import DeathTrack from "../atoms/DeathTrack/DeathTrack";

import "./HealthInfo.scss";

import { useState } from "react";

function HealthInfo() {
  const [successes, setSuccesses] = useState<number>(0);
  const [failures, setFailures] = useState<number>(0);

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
          text="Alt Max"
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
          <div className="health-info__saves">
            <DeathTrack state={successes} value={0} setState={setSuccesses} />
            <DeathTrack state={successes} value={1} setState={setSuccesses} />
            <DeathTrack state={successes} value={2} setState={setSuccesses} />
          </div>
          <p>Failures</p>
          <div className="health-info__saves">
            <DeathTrack state={failures} value={0} setState={setFailures} />
            <DeathTrack state={failures} value={1} setState={setFailures} />
            <DeathTrack state={failures} value={2} setState={setFailures} />
          </div>
          <p>Death Saves</p>
        </div>
      </div>
    </section>
  );
}

export default HealthInfo;
