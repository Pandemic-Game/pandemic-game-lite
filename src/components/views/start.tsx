import React from 'react';
import EndCoronaVirusLogo from '../../assets/PNG/ecvlogo.png';
import WarningCircle from '../../assets/SVG/WarningCircle.svg';
import WarningCircleOuter from '../../assets/SVG/WarningCircleOuter.svg';
import * as Btn from '../buttons';
import * as Txt from '../text';

export function Splash(props: {onClick: Function}) {
    return(
        <div className='min-h-full p-2 flex flex-col justify-around items-center bg-yellow-400'>
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
                <Txt.Subtitle value={'You are a World Leader.'} col='black'/>
                <p className='m-2 text-center font-sans font-medium'>
                    Your job is to navigate the first few months of 2021. The decisions you make will polarize different parts of society, from the public to businesses and healthcare. 
                </p>
                <Txt.Subtitle value={'What type of leader are you?'} col='black'/>
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


export function Introduction(props: {onClickContinue: Function, onClickSource: Function}) {
    return(
        <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'> 
            <div className='flex flex-col justify-between items-center'>
                <Txt.Subtitle value={'El presidente!'}  col='black'/>
                <Txt.Title value='A situation requires your attention!' col='gray-900' />
            </div>
            <div className='animate__animated animate__fadeIn  m-2 p-2 flex flex-row items-start'>
                <div className='m-2 p-2 flex flex-row'>
			        <img className={'h-auto w-14 z-10'} src={WarningCircle} alt="WarningCircle" />
			        <img className={'h-auto w-14 relative right-11 z-0 animate-ping'} src={WarningCircleOuter} alt="WarningCircle animation" />
                </div>
                <Txt.Paragraph value={`   
                    Vaccines for COVID-19 have been developed but they will take a while to work.
                    
                    The way you respond to the pandemic in the next few months will have consequences.
                    
                    You can probably do this in the next 5 minutes.
                `} col='black' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Btn.ViewSource onClick={props.onClickSource} sourceDetails={
                    {
                        sourceName: 'Interactive data model', 
                        link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com', 
                        description: 'These screens will show you our sources. For example, our data model is based on US and UK data, including extensive polls of the UK population as well as COVID and economic data from UK and US sources.'
                    }
                } />
                <Txt.Subtitle value={'This game is based on real data. Look out for question mark icons and press them to inspect our evidence'}  col='black'/>
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