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
                <Txt.Subtitle value={'A five minute game about lockdown.'} col='black' />
            </div>
            <p className='m-2 text-center font-sans font-medium'>
                What would your response to the COVID-19 pandemic be? 
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
        <div className='min-h-full p-2 flex flex-col items-center bg-yellow-400'>
            <div className='flex flex-col justify-between items-center'>
                <Txt.Subtitle value={'El presidente!'} col='black' />
                <Txt.Title value='How to play' col='gray-900' />
            </div>
            <ul className='list-disc p-6 m-2 font-sans animate__animated animate__fadeIn' >
                <li> Respond to events and reach one of four different endings </li>
                <li> Your choices have consequences and will polarize different parts of society (from the public to businesses and healthcare) </li>
                <li> You won't be able to change society all at once. Each month, you will be given one event and have only a couple of limited choices </li>
                <li> Careful... One wrong step, can put you in an out-of-control situation with no good choices available! </li>
            </ul>
            <div className='m-auto flex flex-row justify-center items-center'>
                <Btn.ViewSource onClick={props.onClickSource} sourceDetails={
                    {
                        sourceName: 'Interactive data model',
                        link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com',
                        description: 'These screens will show you our sources. For example, our data model is based on extensive polls of the UK population as well as epidemiological and economic data from UK and US sources.'
                    }
                } />
                <Txt.Subtitle value={`This game is based on real data (press the red question marks if you don't believe us!)`} col='black' />
                <Btn.ViewSource onClick={props.onClickSource} sourceDetails={
                    {
                        sourceName: 'Interactive data model',
                        link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com',
                        description: 'These screens will show you our sources. For example, our data model is based on extensive polls of the UK population as well as epidemiological and economic data from UK and US sources.'
                    }
                } />
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