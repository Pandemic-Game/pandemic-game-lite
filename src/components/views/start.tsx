import React, { useEffect } from 'react';
import EndCoronaVirusLogo from '../../assets/PNG/ecvlogo.png';
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
        <div className={`min-h-full p-2 flex flex-col justify-around items-center ${bgColorClass}`}>
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
            <div className='flex flex-col justify-center items-center'>
                <Txt.Subtitle value={'You are a World Leader.'} col='black' />
                <p className='m-2 text-center font-sans font-medium'>
                    Your job is to navigate the first few months of 2021. The decisions you make will polarize different parts of society, from the public to businesses and healthcare (and will probably take you a few minutes).
                </p>
                <Txt.Subtitle value={'What type of leader are you?'} col='black' />
            </div>
            <Btn.Bouncy
                value='Play the game'
                bg='purple-900'
                col='white'
                onClick={props.onClick}
            />
        </div>
    );
}


export function Introduction(props: { onClickContinue: Function, onClickSource: Function }) {
    return (
        <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'>
            <div className='flex flex-col justify-between items-center'>
                <Txt.Subtitle value={'El presidente!'} col='black' />
                <Txt.Title value='A situation requires your attention!' col='gray-900' />
            </div>
            <div className='animate__animated animate__fadeIn  m-2 p-2 flex flex-row items-start'>
                <div className='m-2 p-2 flex flex-row'>
                    <WarningSign />
                </div>
                <div className='flex flex-col'>
                    <Txt.Paragraph value={`  
                        It is early 2021. 
                        The way you respond to the pandemic in the next few months will have consequences.`
                    } col='black' />
                    <div className='flex flex-row m-2'>
                        <Btn.ViewSource onClick={props.onClickSource} sourceDetails={
                            {
                                sourceName: 'Interactive data model',
                                link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com',
                                description: 'These screens will show you our sources. For example, our data model is based on US and UK data, including extensive polls of the UK population as well as COVID and economic data from UK and US sources.'
                            }
                        } />
                        <Txt.Paragraph value={`  
                            This game is based on real data (press the red question marks if you don't believe us!)
                        `} col='black' />
                    </div>
                </div>
            </div> 
            <Btn.Bouncy
                value='Start'
                bg='purple-900'
                col='white'
                onClick={props.onClickContinue}
            />
        </div>
    );
}