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
        <div className='animate__animated animate__jackInTheBox w-full p-2 flex flex-row justify-center items-center'>
            <div className='h-full flex flex-row justify-center items-center text-center rounded-l-xl bg-green-500 z-20 overflow-visible' style={{width: `${support}%`}}> 
                <FontAwesomeIcon icon={faThumbsUp} size='lg'/>
                <i className="fas fa-thumbs-up"></i> 
                <Txt.Subtitle value={`${support}%`}  col='black'/>
            </div>
            <div className='h-full flex flex-row justify-center items-center text-center bg-gray-50 z-10 overflow-visible' style={{width: `${undecided}%`}}> 
                <Txt.Subtitle value={`.`}  col='white'/>
            </div>
            <div className='h-full flex flex-row justify-center items-center text-center rounded-r-xl bg-red-500 z-20 overflow-visible' style={{width: `${opposition}%`}}> 
                <FontAwesomeIcon icon={faThumbsDown} size='lg'/>
                <Txt.Subtitle value={`${opposition}%`}  col='black'/>
            </div>
        </div>
    );
}

// Cases
export function CaseCircle(props:{ type: 'increase' | 'decrease' | 'default', animationDelay: number }){
    switch(props.type){
        case 'default': return (
            <FontAwesomeIcon 
                icon={faCircle} 
                size='lg' 
                color={'yellow'} 
                className='m-1 animate__animated animate__fadeIn' 
                style={{animationDelay: `${props.animationDelay}s`}}
            />
        );
        case 'decrease': return (
            <span className='animate__animated animate__fadeIn' style={{animationDelay: `${props.animationDelay}s`}}>
                <FontAwesomeIcon 
                    icon={faCircle} 
                    size='lg' 
                    color={'grey'} 
                    className='m-1 animate-pulse '
                />
            </span>
        );
        case 'increase': return ( 
            <div className='m-1 relative animate__animated animate__fadeIn' style={{animationDelay: `${props.animationDelay}s`}}>
                <FontAwesomeIcon icon={faCircle} size='lg'color={'red'} />
                <span className={`absolute top-0 left-0 animate-ping`} >
                    <FontAwesomeIcon icon={faCircle} size='lg' color={'dark-red'}/>
                </span>
            </div>
        );
    };
}

function CaseCircles(props: {thisTurn: Indicators, lastTurn: Indicators}){
    const delay = () => 1 + ( circles.length / 10 ) // 1 = 1s delay on parent animation
    const circles:JSX.Element[] = [];
    for(let i=0; i < (props.thisTurn.newCases < props.lastTurn.newCases ? props.thisTurn.newCases : props.lastTurn.newCases); i++){
        circles.push( <CaseCircle type='default' animationDelay={ delay() } /> )
    }
    for(let i=0; i < Math.max(0, props.thisTurn.newCases - props.lastTurn.newCases); i++){
        circles.push( <CaseCircle type='increase' animationDelay={ delay() } /> )
    }
    for(let i=0; i < Math.max(0, props.lastTurn.newCases - props.thisTurn.newCases); i++){
        circles.push( <CaseCircle type='decrease' animationDelay={ delay() } /> )
    }
    return(
        <div className='flex flex-row flex-wrap justify-start items-start'>
            {circles}
        </div>
    )
}

export function CaseGraphic(props: {thisTurn: Indicators, lastTurn: Indicators}){
    const getTitle = () => props.thisTurn.newCases>props.lastTurn.newCases ? 'COVID-19 cases are rising!' : 'COVID-19 cases are falling'; 
    return (
        <div className='w-100 flex flex-col justify-between items-center text-white'>
            <Txt.Subtitle value={ getTitle() }  col='white'/>
            <div className='m-2 p-2 flex flex-col justify-start items-start animate__delay-1s animate__animated animate__fadeIn'>
                <div className='w-auto flex flex-col justify-center items-start'>
                    <CaseCircles thisTurn={props.thisTurn} lastTurn={props.lastTurn} />
                    <div className='flex flex-row items-center'>
                        <Lines.Hr my={4} col='white'/>
                        <p className='w-80'>{props.thisTurn.newCases} cases per 1000</p>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap justify-start items-start'>
                    { props.thisTurn.newCases>props.lastTurn.newCases ?  
                        <CaseCircle type='increase' animationDelay={0} /> 
                        : <CaseCircle type='decrease' animationDelay={0} /> 
                    }
                    <p className='w-80'> Last month: {props.lastTurn.newCases}</p>
                </div>
            </div>           
        </div>
    );
}

// Economy
export function EconomyGraphic(props: {indicators: Indicators}){
    const getTitle = () => props.indicators.medicalCosts>props.indicators.lockdownCosts ? 'Medical costs are high!' : 'Economy'; 
    const calculateArea = (value: number):number => Math.sqrt( value*100 / 3.14 ) * 2;
    return(
        <div className='w-full m-2 flex flex-col justify-center items-center text-white animate__delay-3s animate__animated animate__fadeIn'>
            <Txt.Subtitle value={ getTitle() }  col='white'/>
            <div className='flex flex-row'>
                <div className='flex flex-col items-center'>
                    <p className='p-2 text-lg font-medium'>Medical costs </p>
                    <div className='animate__delay-3s animate__animated animate__bounceIn'>
                        <Txt.Text value={`$${props.indicators.medicalCosts} Billion`}  col='white'/>
                    </div>
                    <img 
                        src={medicalCoin} 
                        style={{height: calculateArea(props.indicators.medicalCosts) }} 
                        alt='Medical Costs'
                        className='animate__delay-1s animate__animated animate__bounceIn'
                    />
                </div>
                <div className='mb-4 flex flex-col items-center'>   
                    <p className='p-2 text-lg font-medium'>Lockdown costs </p>
                    <div className='animate__delay-4s animate__animated animate__bounceIn'>
                        <Txt.Text value={`$${props.indicators.lockdownCosts} Billion`}  col='white'/>
                    </div>                 
                    <img 
                        src={lockdownCoin} 
                        style={{height: calculateArea(props.indicators.lockdownCosts) }} 
                        alt='Lockdown Costs'
                        className='animate__delay-4s animate__animated animate__bounceIn'
                    />
                </div>
            </div>
        </div>
    )
}
