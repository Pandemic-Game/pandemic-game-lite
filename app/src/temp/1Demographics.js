

class Comparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            populationPyramid: null,
            gender: null,
            olderAdult: null
        };
        this.data = data.demographics; // data.js
    };

    drawVisualisations(){
        // Draw population pyramid
        drawPyramid('comparison-pyramid', this.state.populationPyramid);

        // Draw gender pie chart
        drawPie(
            `comparison-pie-gender`, 
            this.state.gender, 
            ['#ec4646', '#eee']
        );

        // Draw older adult pie chart
        drawPie(
            `comparison-pie-olderAdult`, 
            this.state.olderAdult, 
            ['#da723c', '#eee']
        );
    };

    switchToView(newData){
        this.setState(newData, this.drawVisualisations);
    }

    renderButton(newData, buttonLabel){
        return(
            <Button
                value={buttonLabel}
                onClick={() => this.switchToView(newData)}
            />
        );
    };

    renderPie(demographic){
        if(this.state.gender){
            const difference = this.state[demographic][0] - this.data.livedExperience[demographic][0];
            const description = difference > 0 ? `(+${difference.toFixed(0)}%)` : `(${difference.toFixed(0)}%)`;
            return(
                <PieChart
                    id={`comparison-pie-${demographic}`}
                    height={this.props.dims.pieHeight}
                    width={this.props.dims.pieWidth}
                    subtitle={this.props.labels[demographic]}
                    description={description}
                />
            );
        }
    };

    renderPyramid(){
        if(this.state.populationPyramid){
            return(
                <Pyramid
                    id={`comparison-pyramid`}
                    height={this.props.dims.pyramidHeight}
                    width={this.props.dims.pyramidWidth}
                />
            );
        }
    };

    render() {
        return(
            <div className='p-2 d-flex flex-column justify-content-center align-items-center'>
                <div className='block-title p-2 d-flex flex-column justify-content-center align-items-center'>
                    <h5>Compare to...</h5>
                    <div className='p-2 d-flex flex-row justify-content-center align-items-center'>
                        {this.renderButton(this.data.streetHomeless, 'Street Homeless')}
                        {this.renderButton(this.data.generalPopulation, 'General Population')}
                    </div>
                </div>
                {this.renderPyramid()}
                <div className='p-2 d-flex flex-row justify-content-center align-items-center'>
                    {this.renderPie('gender')}
                    {this.renderPie('olderAdult')}
                </div>
            </div>
        )
    }
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            populationPyramid: data.demographics.livedExperience.populationPyramid,
            gender: data.demographics.livedExperience.gender,
            olderAdult: data.demographics.livedExperience.olderAdult
        };
    };

    componentDidMount(){
        
        // Draw population pyramid
        drawPyramid('main-pyramid', this.state.populationPyramid);

        // Draw gender pie chart
        drawPie(
            `main-pie-gender`, 
            this.state.gender, 
            ['#ec4646', '#eee']
        );

        // Draw older adult pie chart
        drawPie(
            `main-pie-olderAdult`, 
            this.state.olderAdult, 
            ['#da723c', '#eee']
        );
    }

    renderPie(demographic){
        if(this.state.gender){
            return(
                <PieChart
                    id={`main-pie-${demographic}`}
                    height={this.props.dims.pieHeight}
                    width={this.props.dims.pieWidth}
                    subtitle={this.props.labels[demographic]}
                    description={''}
                />
            );
        }
    };

    renderPyramid(){
        if(this.state.populationPyramid){
            return(
                <Pyramid
                    id={`main-pyramid`}
                    height={this.props.dims.pyramidHeight}
                    width={this.props.dims.pyramidWidth}
                />
            );
        }
    };

    render() {
        return(
            <div className='p-2 d-flex flex-column justify-content-center align-items-center'>
                <div className='block-title p-2 d-flex flex-column justify-content-center align-items-start'>
                    <h1>Who has lived experience of homelessness?</h1>
                    <h5 style={{color: 'darkgrey'}}>Population pyramid by age and gender</h5>
                </div>
                {this.renderPyramid()}
                <div className='p-2 d-flex flex-row justify-content-center align-items-center'>
                    {this.renderPie('gender')}
                    {this.renderPie('olderAdult')}
                </div>
            </div>
        )
    }
};

// Main layout component
class Demographics extends React.Component {
    constructor(props) {
        super(props);
        this.labels = {
            gender: 'Female',
            olderAdult: 'Older adult'
        };
        this.dimensions = {
            pyramidHeight: 400,
            pyramidWidth: 600,
            pieHeight: 200,
            pieWidth: 200
        };
    }

    render(){
        return (
            <div className='w-100 h-100 d-flex flex-row justify-content-center align-items-center'>
                <Main dims={this.dimensions} labels={this.labels} />
                <Comparison dims={this.dimensions} labels={this.labels} />
            </div>
        );
    }
}