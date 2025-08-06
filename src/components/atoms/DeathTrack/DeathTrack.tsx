import "./DeathTrack.scss";

interface props {
  state: number;
  value: number;
  setState: Function;
}

function DeathTrack({ state, value, setState }: props) {
  return (
    <span
      className={
        "death-saves__checkbox " +
        (state > value ? "death-saves__checkbox--checked" : "")
      }
      onClick={() => {
        state == value + 1 ? setState(0) : setState(value + 1);
      }}
    ></span>
  );
}

export default DeathTrack;
