import React from 'react';
import * as Txt from './text';
import * as Lines from './lines';
import { Indicators } from '../model/Indicators';
import lockdownCoin from '../assets/SVG/coin-lockdown.svg';
import medicalCoin from '../assets/SVG/coin-medical.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown, faCircle} from '@fortawesome/free-solid-svg-icons';

// Public support

export function SupportBar(props: {indicators: Indicators}){
    const support = props.indicators.supportForLastResponse;
    const opposition = props.indicators.oppositionToLastResponse;
    const undecided = 100 - support - opposition;
    return (
        <div className='w-full p-2 flex flex-row justify-center items-center'>
            <div className='flex flex-row justify-center items-center text-center rounded-l-xl bg-green-500' style={{width: `${support}%`}}> 
                <FontAwesomeIcon icon={faThumbsUp} size='lg'/>
                <i className="fas fa-thumbs-up"></i> 
                <Txt.Subtitle value={`${support}%`} />
            </div>
            <div className='flex flex-row justify-center items-center text-center bg-gray-50' style={{width: `${undecided}%`}}> 
                <Txt.Subtitle value={`${undecided}%`} />
            </div>
            <div className='flex flex-row justify-center items-center text-center rounded-r-xl bg-red-500' style={{width: `${opposition}%`}}> 
                <FontAwesomeIcon icon={faThumbsDown} size='lg'/>
                <Txt.Subtitle value={`${opposition}%`} />
            </div>
        </div>
    );
}

// Cases
export function CaseCircle(props:{ type: 'increase' | 'decrease' | 'default' }){
    switch(props.type){
        case 'default': return <FontAwesomeIcon icon={faCircle} size='lg' color={'yellow'} className='m-1' />;
        case 'decrease': return <FontAwesomeIcon icon={faCircle} size='lg' color={'grey'} className='m-1 animate-pulse' />;
        case 'increase': return ( 
            <div className='m-1 relative'>
                <FontAwesomeIcon icon={faCircle} size='lg' color={'red'} />
                <span className={`absolute top-0 left-0 animate-ping`} >
                    <FontAwesomeIcon icon={faCircle} size='lg' color={'dark-red'} />
                </span>
            </div>
        );
    };
}

function CaseCircles(props: {thisTurn: Indicators, lastTurn: Indicators}){
    const circles:JSX.Element[] = [];
    for(let i=0; i < (props.thisTurn.newCases > props.lastTurn.newCases ? props.thisTurn.newCases : props.lastTurn.newCases); i++){
        circles.push( <CaseCircle type='default' /> )
    }
    for(let i=0; i < Math.max(0, props.thisTurn.newCases - props.lastTurn.newCases); i++){
        circles.push( <CaseCircle type='increase' /> )
    }
    for(let i=0; i < Math.max(0, props.lastTurn.newCases - props.thisTurn.newCases); i++){
        circles.push( <CaseCircle type='decrease' /> )
    }
    return(
        <div className='flex flex-row flex-wrap justify-start items-start'>
            {circles}
        </div>
    )
}

export function CaseGraphic(props: {thisTurn: Indicators, lastTurn: Indicators}){
    const title = () => props.thisTurn.newCases>props.lastTurn.newCases ? 'COVID-19 cases are rising!' : 'COVID-19 cases are falling'; 
    return (
        <div className='w-100 flex flex-col justify-between items-center text-white'>
            <Txt.Subtitle value={ title() } />
            <div className='m-2 p-2 flex flex-col justify-start items-start'>
                <div className='mb-2 pb-2 flex flex-col justify-start items-start'>
                    <div className='flex flex-row flex-wrap justify-start items-start'>
                        <CaseCircle type='default' />
                        <Txt.TextLite value='Cases per 10,000 population' />
                    </div>
                    <div className='flex flex-row justify-start items-start'>
                        { 
                            props.thisTurn.newCases>props.lastTurn.newCases ? 
                            <div className='flex flex-row flex-wrap justify-start items-start'>
                                <CaseCircle type='increase' /> <Txt.TextLite value='Increase from last month' />
                            </div>
                            :
                            <div className='flex flex-row flex-wrap justify-start items-start'>
                                <CaseCircle type='decrease' /> <Txt.TextLite value='Reduction from last month' /> 
                            </div>
                        }
                    </div>
                </div>
                <CaseCircles thisTurn={props.thisTurn} lastTurn={props.lastTurn} />
                <div className='w-full flex flex-row justify-around items-center'>
                    <Lines.Hr /> <p className='w-40'>{props.thisTurn.newCases} in 10000</p>
                </div>
            </div>           
        </div>
    );
}

// Economy
export function EconomyGraphic(props: {indicators: Indicators}){
    const title = () => props.indicators.medicalCosts>props.indicators.lockdownCosts ? 'Medical costs are high!' : 'Economy'; 
    const calculateArea = (value: number):number => Math.sqrt( value / 3.14 ) * 2;
    return(
        <div className='w-full flex flex-col justify-center items-center text-white'>
            <Txt.Subtitle value={ title() } />
            <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={medicalCoin} style={{height: calculateArea(props.indicators.medicalCosts) }} alt='Medical Costs'/>
                    <Lines.Hr />
                    <p className='p-2 text-lg font-medium'>Medical costs </p>
                    <Txt.Text value={`$${props.indicators.medicalCosts}`} />
                </div>
                <div className='flex flex-col justify-center items-center'>                    
                    <img src={lockdownCoin} style={{height: calculateArea(props.indicators.lockdownCosts) }} alt='Lockdown Costs'/>
                    <Lines.Hr />
                    <p className='p-2 text-lg font-medium'>Lockdown costs </p>
                    <Txt.Text value={`$${props.indicators.lockdownCosts}`} />
                </div>
            </div>
        </div>
    )
}
