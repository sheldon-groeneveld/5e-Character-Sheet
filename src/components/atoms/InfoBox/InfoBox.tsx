import "./InfoBox.scss";

interface props {
  id: string;
  text: string;
  mainClassName?: string;
}

function InfoBox({ id, text, mainClassName = "" }: props) {
  return (
    <div className={`info-box ${mainClassName}`}>
      <input type="text" id={id} className="info-box__input" />
      <label htmlFor={id} className="info-box__label">
        <p className="info-box__copy">{text}</p>
      </label>
    </div>
  );
}

export default InfoBox;
