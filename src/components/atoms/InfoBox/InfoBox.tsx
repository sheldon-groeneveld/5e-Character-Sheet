import "./InfoBox.scss";

interface props {
  id: string;
  text: string;
}

function InfoBox({ id, text }: props) {
  return (
    <div className="info-box">
      <input type="text" id={id} className="info-box__input" />
      <label htmlFor={id} className="info-box__label">
        {text}
      </label>
    </div>
  );
}

export default InfoBox;
