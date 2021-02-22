import React from 'react';

// Public support

export function SupportBar(props){
    return (
        <div className='w-100 p-2 d-flex flex-row SupportBar'>
            <span className='Bar' style={{width: props.support, color: 'green'}}> 
                <i className="fas fa-thumbs-up"></i> {props.support}%
            </span>
            <span className='Bar' style={{width: props.dontKnow, color: 'grey'}}> 
                {props.dontKnow}%
            </span>
            <span className='Bar' style={{width: props.oppose, color: 'red'}}> 
                <i className="fas fa-thumbs-down"></i> {props.oppose}%
            </span>
        </div>
    );
}

// Cases
export function CaseCircle(props){
    return(
        <span class={`CaseCircle ${props.className}`}></span>
    )
}

export class CaseGraphic extends React.Component {
    constructor(props) {
        super(props);
        this.previousCases = props.previousCases;
        this.newCases = props.newCases;
    }
    renderGraphic(){
        const circles = [];
        
        for(let i=0; i < this.previousCases; i++){
            circles.push( <CaseGraphic className={'Old'}/> )
        }
        for(let i=0; i < this.newCases; i++){
            circles.push( <CaseGraphic className={'New'}/> )
        }
        return(circles)
    }

    render(){
        return (
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex flex-row'>
                    <h5> Cases </h5>
                    <div>
                        <CaseCircle className={'Old'}/> Cases 
                        <CaseCircle className={'New'}/> New Cases 
                    </div>
                </div>
                <div> {this.renderGraphic()} </div>
                <div className='d-flex flex-row'>
                    <span className='HorizontalLine'></span>
                    <span style={{fontSize: '1.2rem'}}> props.newCases </span> in 1000
                </div>
            </div>
        );
    }
}

// Economy
export function EconomyGraphic(props){
    return(
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>

            <h5> Costs </h5>
            
            <div className='w-100 d-flex flex-row justify-content-center align-items-center'>
                <img 
                    src='' 
                    alt='Medical Costs'
                    className='Cost' 
                    style={{height: props.medicalCosts}}
                />
                <img 
                    src='' 
                    alt='Lockdown Costs'
                    className='Cost' 
                    style={{height: props.lockdownCosts}}
                />
            </div>

            <div className='HorizontalLine'></div>

            <div className='d-flex flex-row'>
                <h5>Medical costs: {props.medicalCosts}</h5>
                <h5>Lockdown costs: {props.lockdownCosts}</h5>
            </div>
        </div>
    )
}

// Reputations
export function ReputationSlider(props){
    return(
        <div>
            <img src={props.src} alt={`Reputation icon ${props.src}`} />
            <p> {props.value} </p>
        </div>
    )
}