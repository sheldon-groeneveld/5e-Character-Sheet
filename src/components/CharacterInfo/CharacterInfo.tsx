import "./CharacterInfo.scss";

function CharacterInfo() {
  return (
    <section className="character-info">
      <div className="character-info__name">
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
        <div className="character-info__item">
          <input
            type="text"
            id="class-and-level"
            className="character-info__input"
          />
          <label htmlFor="class-and-level" className="character-info__label">
            Class & Level
          </label>
        </div>

        <div className="character-info__item">
          <input
            type="text"
            id="background"
            className="character-info__input"
          />
          <label htmlFor="background" className="character-info__label">
            Background
          </label>
        </div>

        <div className="character-info__item">
          <input
            type="text"
            id="player-name"
            className="character-info__input"
          />
          <label htmlFor="player-name" className="character-info__label">
            Player Name
          </label>
        </div>

        <div className="character-info__item">
          <input type="text" id="race" className="character-info__input" />
          <label htmlFor="race" className="character-info__label">
            Race
          </label>
        </div>

        <div className="character-info__item">
          <input type="text" id="alignment" className="character-info__input" />
          <label htmlFor="alignment" className="character-info__label">
            Alignment
          </label>
        </div>

        <div className="character-info__item">
          <input
            type="text"
            id="experience-points"
            className="character-info__input"
          />
          <label htmlFor="experience-points" className="character-info__label">
            Experience Points
          </label>
        </div>
      </div>
    </section>
  );
}

export default CharacterInfo;
