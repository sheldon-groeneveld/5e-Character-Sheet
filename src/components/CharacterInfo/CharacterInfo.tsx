import InfoBox from "../atoms/InfoBox/InfoBox";
import "./CharacterInfo.scss";

function CharacterInfo() {
  return (
    <section className="character-info">
      <div className="character-info__item">
        <input
          type="text"
          id="character-name"
          className="character-info__input"
        />
        <label htmlFor="character-name" className="character-info__label">
          Character Name
        </label>
      </div>

      <div className="character-info__wrapper">
        <InfoBox id={"class-and-level"} text={"Class & Level"} />
        <InfoBox id={"background"} text={"Background"} />
        <InfoBox id={"player-name"} text={"Player Name"} />
        <InfoBox id={"race"} text={"Race"} />
        <InfoBox id={"alignment"} text={"Alignment"} />
        <InfoBox id={"experience-points"} text={"Experience Points"} />
      </div>
    </section>
  );
}

export default CharacterInfo;
