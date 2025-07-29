import InfoBox from "../atoms/InfoBox/InfoBox";
import "./CharacterInfo.scss";

function CharacterInfo() {
  return (
    <section className="character-info">
      <InfoBox id={"character-name"} text={"Character Name"} />

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
