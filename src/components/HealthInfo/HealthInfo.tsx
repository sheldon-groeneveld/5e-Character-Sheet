import InfoBox from "../atoms/InfoBox/InfoBox";
import "./HealthInfo.scss";

import { useState } from "react";

function HealthInfo() {
  const [successes, setSuccesses] = useState(0);
  const [failures, setFailures] = useState(0);

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
          <div className="health-info__saves">
            <span
              className={
                "health-info__checkbox " +
                (successes > 0 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                successes == 1 ? setSuccesses(0) : setSuccesses(1);
              }}
            ></span>
            <span
              className={
                "health-info__checkbox " +
                (successes > 1 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                successes == 2 ? setSuccesses(0) : setSuccesses(2);
              }}
            ></span>
            <span
              className={
                "health-info__checkbox " +
                (successes > 2 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                successes == 3 ? setSuccesses(0) : setSuccesses(3);
              }}
            ></span>
          </div>
          <p>Failures</p>
          <div className="health-info__saves">
            <span
              className={
                "health-info__checkbox " +
                (failures > 0 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                failures == 1 ? setFailures(0) : setFailures(1);
              }}
            ></span>
            <span
              className={
                "health-info__checkbox " +
                (failures > 1 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                failures == 2 ? setFailures(0) : setFailures(2);
              }}
            ></span>
            <span
              className={
                "health-info__checkbox " +
                (failures > 2 ? "health-info__checkbox--checked" : "")
              }
              onClick={() => {
                failures == 3 ? setFailures(0) : setFailures(3);
              }}
            ></span>
          </div>
          <p>Death Saves</p>
        </div>
      </div>
    </section>
  );
}

export default HealthInfo;
