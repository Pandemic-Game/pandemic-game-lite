import React, { useEffect } from 'react';
import EndCoronaVirusLogo from '../../assets/PNG/ecvlogo.png';
import GameLogo from '../../assets/SVG/gamelogo.svg';
import { useThemeContext } from '../../ThemeProvider';
import * as Btn from '../buttons';
import * as Txt from '../text';
import { WarningSign } from '../warning-sign';

export function Splash(props: { onClick: Function }) {
    const bgColorClass = "bg-yellow-400"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return (
        <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
            <div className="m-2">
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
            </div>
            <div className="m-2 flex m-2 flex-col justify-center items-center" style={{ marginTop: "auto" }}>
                <img
                    src={GameLogo}
                    alt='GameLogo'
                    className='m-2 w-auto h-20 rounded-lg'>
                </img>
                <Txt.Subtitle value={'A five minute game to end lockdown.'} col='black' />
            </div>
            <p className='m-2 text-center font-sans font-medium'>
                How would you end COVID-19 lockdowns?
                Lead your country, navigate the first few months of 2021 and find out.
            </p>
            <div style={{ marginTop: "auto" }}>
                <Btn.Bouncy
                    value='Play the game'
                    bg='purple-900'
                    col='white'
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
}


export function Introduction(props: { onClickContinue: Function, onClickSource: Function }) {
    return (
        <div className='min-h-full p-2 flex flex-col justify-center items-center bg-yellow-400'>
            <div className='flex flex-col justify-between items-center'>
                <Txt.Subtitle value={'El presidente!'} col='black' />
                <Txt.Title value='How to play' col='gray-900' />
            </div>
            <div className='max-w-md p-6 flex flex-col justify-start items-start text-left list-disc m-2 font-sans animate__animated animate__fadeIn'>
                <Txt.Subtitle value='Your goal' col='black' />
                <li className='p-2 pb-4'>Be out of lockdown in 3 months time</li>
                <Txt.Subtitle value='Respond to events' col='black' />             
                <li className='p-2 pb-0'>Each month, you will encounter an event </li>
                <li className='p-2'>You will have a limited choice of responses (you won't be able to change society all at once!) </li>
                <Txt.Subtitle value='Be careful...' col='black' />       
                <li className='p-2'>One wrong step can put you in an out-of-control situation with no good choices available! </li>
            </div>
            <div className='m-auto flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <Txt.Subtitle value={`Made with real data`} col='black' />
                    <Btn.ViewSource onClick={props.onClickSource} sourceDetails={
                        {
                            sourceName: 'Interactive data model',
                            link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com',
                            description: 'These screens will show you our sources. For example, our data model is based on extensive polls of the UK population as well as epidemiological and economic data from UK and US sources.'
                        }
                    } />
                </div>
                <p className='text-center'>(press the red question marks if you don't believe us!)</p>
            </div>
            <div style={{ marginTop: "auto" }}>
                <Btn.Bouncy
                    value='Start'
                    bg='purple-900'
                    col='white'
                    onClick={props.onClickContinue}
                />
            </div>
        </div>
    );
}