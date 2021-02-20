function Button(props) {
    return (
      <button className="m-2 btn btn-primary" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function PieChart(props) {
    return (
        <div className='p-2 d-flex flex-column justify-content-center align-items-center'>
            <svg id={props.id} height={props.height} width={props.width}></svg>
            <h5>{props.subtitle}</h5>
            <p>{props.description}</p>
        </div>
    );
}

function Pyramid(props) {
    return (
        <div className='p-2 d-flex flex-column justify-content-center align-items-center'>
            <svg id={props.id} height={props.height} width={props.width}></svg>
        </div>
    );
}