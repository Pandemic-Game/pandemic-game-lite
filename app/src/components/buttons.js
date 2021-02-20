function RoundedButton(props) {
    return (
      <button className="m-2 btn RoundedButton" onClick={props.onClick}>
        {props.label}
      </button>
    );
}

function SneakyButton(props) {
    return (
      <button className="w-100 m-2 btn SneakyButton" onClick={props.onClick}>
        {props.label}
      </button>
    );
}