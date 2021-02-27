import React from 'react';
import * as Txt from './text';
import { Indicators } from '../model/Indicators';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

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
export function CaseCircle(props:{col: string}){
    return(
        <span className={`p-2 rounded-full bg-${props.col}`}></span>
    )
}

function CaseCircles(props: {indicators: Indicators}){
    const circles = [];
    for(let i=0; i < props.indicators.newCases; i++){
        circles.push( <CaseCircle col={'yellow-500'}/> )
    }
    for(let i=0; i < props.indicators.newCases; i++){
        circles.push( <CaseCircle col={'red-500'}/> )
    }
    return(
        <div>
            {circles}
        </div>
    )
}

export function CaseGraphic(props: {indicators: Indicators}){
    return (
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex flex-row'>
                <h5> Cases </h5>
                <div>
                    <CaseCircle col={'yellow-500'}/> Cases 
                    <CaseCircle col={'red-500'}/> New Cases 
                </div>
            </div>
            <CaseCircles indicators={props.indicators} />
            <div className='d-flex flex-row'>
                <span className='HorizontalLine'></span>
                <span style={{fontSize: '1.2rem'}}> props.indicators.newCases </span> in 1000
            </div>
        </div>
    );
}

// Economy
export function EconomyGraphic(props: {indicators: Indicators}){
    return(
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>

            <h5> Costs </h5>
            
            <div className='w-100 d-flex flex-row justify-content-center align-items-center'>
                <img 
                    src='' 
                    alt='Medical Costs'
                    className='Cost' 
                    style={{height: props.indicators.medicalCosts}}
                />
                <img 
                    src='' 
                    alt='Lockdown Costs'
                    className='Cost' 
                    style={{height: props.indicators.lockdownCosts}}
                />
            </div>

            <div className='HorizontalLine'></div>

            <div className='d-flex flex-row'>
                <h5>Medical costs: {props.indicators.medicalCosts}</h5>
                <h5>Lockdown costs: {props.indicators.lockdownCosts}</h5>
            </div>
        </div>
    )
}
