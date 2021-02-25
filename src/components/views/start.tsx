import React from 'react';
import ReactDOM from 'react-dom'
import EndCoronaVirusLogo from '../../assets/PNG/ecvlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';

export function Splash(props: {onClick: Function}) {
    return(
        <div className='min-h-full  p-2 flex flex-col justify-around items-center bg-yellow-500'> 
            <a 
                href='https://www.endcoronavirus.org'
                rel='noreferrer'
                target='_blank'
                className='text-blue-900'
            >
                <img 
                    src={EndCoronaVirusLogo} 
                    alt='EndCoronaVirusLogo' 
                    className='m-2 w-auto h-14 rounded-lg'>
                </img>
            </a>
            <Txt.BigTitle value={'Pandemic Game'} />
            <Txt.Paragraph value={`
                You are a World Leader.
                Your job is to navigate the first few months of 2021. The decisions you make will polarize different parts of society, from the public to businesses and healthcare. 
                What type of leader are you?
            `} />
            <Btn.Rounded 
                value='Play the game' 
                bg='purple-900'
                col='white'
                animate='bounce'
                onClick={props.onClick}
            />
        </div>
    );
}


export function Introduction(props: {onClick: Function}) {
    return(
        <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-500'> 
            <Txt.Subtitle value={'El presidente!'} />
            <Txt.Title value='A situation requires your attention!' col='gray-900' />
            <div className='m-2 p-2 flex flex-row'>
                <FontAwesomeIcon icon={faExclamationCircle} className='animate-ping' />
                <Txt.Paragraph value={`   
                    Vaccines for COVID-19 have been developed but they will take a while to work.
                    
                    The way you respond to the pandemic in the next few months will have consequences.
                    
                    You can probably do this in the next 5 minutes.
                `} />
            </div>
            <p className='text-center'>
                This game is based on real data so look out for the question icon to inspect our evidence <FontAwesomeIcon icon={faQuestionCircle} className='animate-pulse' />.
            </p>
            <Btn.Rounded 
                value='Start'
                bg='purple-900'
                col='white'
                animate='bounce'
                onClick={props.onClick}
            />
        </div>
    );
}