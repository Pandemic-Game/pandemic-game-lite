import React from 'react';
import * as Txt from './text';
import * as Lines from './lines';
import { Indicators } from '../model/Indicators';
import lockdownCoin from '../assets/SVG/coin-lockdown.svg';
import medicalCoin from '../assets/SVG/coin-medical.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCircle } from '@fortawesome/free-solid-svg-icons';

// Public support

export function SupportBar(props: { indicators: Indicators }) {
    const support = props.indicators.supportForLastResponse;
    const opposition = props.indicators.oppositionToLastResponse;
    const undecided = 100 - support - opposition;
    return (
        <div className='animate__animated animate__jackInTheBox w-full p-2 flex flex-row justify-center items-center'>
            <div className='h-full flex flex-row justify-center items-center text-center rounded-l-xl bg-green-500 z-20 overflow-visible' style={{ width: `${support}%` }}>
                <FontAwesomeIcon icon={faThumbsUp} size='lg' />
                <i className="fas fa-thumbs-up"></i>
                <Txt.Subtitle value={`${support}%`} col='black' />
            </div>
            <div className='h-full flex flex-row justify-center items-center text-center bg-gray-50 z-10 overflow-visible' style={{ width: `${undecided}%` }}>
                <Txt.Subtitle value={`.`} col='white' />
            </div>
            <div className='h-full flex flex-row justify-center items-center text-center rounded-r-xl bg-red-500 z-20 overflow-visible' style={{ width: `${opposition}%` }}>
                <FontAwesomeIcon icon={faThumbsDown} size='lg' />
                <Txt.Subtitle value={`${opposition}%`} col='black' />
            </div>
        </div>
    );
}

// Cases
export function CaseCircle(props: { type: 'increase' | 'decrease' | 'default', animationDelay: number }) {
    switch (props.type) {
        case 'default': return (
            <FontAwesomeIcon
                icon={faCircle}
                size='lg'
                color={'yellow'}
                className='m-1'
            />
        );
        case 'decrease': return (
            <FontAwesomeIcon
                icon={faCircle}
                size='lg'
                color={'yellow'}
                className='m-1 animate__animated animate__fadeOut'
                style={{ animationDelay: `${props.animationDelay}s`}}
            />
        );
        case 'increase': return (
            <FontAwesomeIcon
                icon={faCircle}
                size='lg'
                color={'yellow'}
                className='m-1 animate__animated animate__fadeIn'
                style={{ animationDelay: `${props.animationDelay}s`}}
            />
        );
    };
}

function CaseCircles(props: { thisTurn: Indicators, lastTurn: Indicators, delay: number }) {
    const casesAreIncreasing = props.thisTurn.newCases > props.lastTurn.newCases;
    const circles: JSX.Element[] = [];

    // Animate in change in cases this turn 
    if(casesAreIncreasing){ // If cases increasing
        for (let i = 0; i < props.lastTurn.newCases; i++) {
            circles.push(<CaseCircle key={`default-${i}`} type='default' animationDelay={0} />)
        }
        for (let i = 0; i < Math.max(0, props.thisTurn.newCases - props.lastTurn.newCases); i++) {
            circles.push(<CaseCircle key={`increase-${i}`} type='increase' animationDelay={ props.delay + (i / 10) } />)
        }
    } else { // If cases decreasing
        for (let i = 0; i < props.thisTurn.newCases; i++) {
            circles.push(<CaseCircle key={`default-${i}`} type='default' animationDelay={0} />)
        }
        for (let i = 0; i < Math.max(0, props.lastTurn.newCases - props.thisTurn.newCases); i++) {
            circles.push(<CaseCircle key={`decrease-${i}`} type='decrease' animationDelay={ props.delay + ((props.lastTurn.newCases - props.thisTurn.newCases - i) / 10) } />)
        }
    }

    return (
        <div className='flex flex-row flex-wrap justify-start items-start'>
            {circles}
        </div>
    )
}

export function CaseGraphic(props: { thisTurn: Indicators, lastTurn: Indicators }) {
    const getTitle = () => props.thisTurn.newCases > props.lastTurn.newCases ? 'COVID-19 cases are rising!' : 'COVID-19 cases are falling';
    const delay = 2;
    return (
        <div className='w-100 flex flex-col justify-between items-center text-white'>
            <Txt.Subtitle value={getTitle()} col='white' />
            <div className='m-2 p-2 flex flex-col justify-start items-start animate__delay-1s animate__animated animate__fadeIn'>
                <div className='w-auto flex flex-col justify-center items-start'>
                    <CaseCircles thisTurn={props.thisTurn} lastTurn={props.lastTurn} delay={delay} />
                    <div className='flex flex-row items-center'>
                        <Lines.Hr my={4} col='white' />
                        <p className='w-80'>{props.thisTurn.newCases} in 1000</p>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap justify-start items-start'>
                    <p> Last month: {props.lastTurn.newCases} cases (/1000 per month)</p>
                    <strong className='animate__animated animate__fadeIn' style={{ animationDelay: `${delay}s`}}>
                        This month: {props.thisTurn.newCases} cases (/1000 per month)
                    </strong>
                </div>
            </div>
        </div>
    );
}

// Economy
export function EconomyGraphic(props: { indicators: Indicators }) {
    const getTitle = () => props.indicators.medicalCosts > props.indicators.lockdownCosts ? 'Medical costs are high!' : 'Economy';
    const calculateArea = (value: number): number => Math.sqrt(value * 100 / 3.14) * 2;
    return (
        <div className='w-full m-2 flex flex-col justify-center items-center text-white animate__delay-3s animate__animated animate__fadeIn'>
            <Txt.Subtitle value={getTitle()} col='white' />
            <div className='flex flex-row'>
                <div className='flex flex-col items-center'>
                    <p className='p-2 text-lg font-medium'>Medical costs </p>
                    <div className=''>
                        <Txt.Text value={`$${props.indicators.medicalCosts} Billion`} col='white' />
                    </div>
                    <img
                        src={medicalCoin}
                        style={{ height: calculateArea(props.indicators.medicalCosts) }}
                        alt='Medical costs'
                        className=''
                    />
                </div>
                <div className='mb-4 flex flex-col items-center'>
                    <p className='p-2 text-lg font-medium'>Lockdown costs </p>
                    <div className=''>
                        <Txt.Text value={`$${props.indicators.lockdownCosts} Billion`} col='white' />
                    </div>
                    <img
                        src={lockdownCoin}
                        style={{ height: calculateArea(props.indicators.lockdownCosts) }}
                        alt='Lost business activity'
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}
