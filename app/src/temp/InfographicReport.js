function ControlBack(props){
    return(
        <button className='btn btn-lg btn-secondary' onClick={props.onClick}> Previous page </button>
    )
}
function ControlNext(props){
    return(
        <button className='btn btn-lg btn-secondary' onClick={props.onClick}> Next page </button>
    )
}

class InfographicReport extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.state = { 
            i: 0
        };
        console.log(this.sections, this.state)
    }

    back(){
        this.setState({ i: this.state.i - 1 });
    }
    next(){
        this.setState({ i: this.state.i + 1 });
    }

    renderControls(){
        const isFirst = this.state.i === 0;
        const back = isFirst ? '' : <ControlBack onClick = {()=>this.back()} />;
        const isLast = (1 + this.state.i) === this.sections.length;
        const next = isLast ? '' : <ControlNext onClick = {()=>this.next()} />;
        return(<div> {back} {next} </div>)
    }

    render(){
        return (
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                {this.sections[this.state.i]}
                {this.renderControls()}
            </div>
        );
    }
}