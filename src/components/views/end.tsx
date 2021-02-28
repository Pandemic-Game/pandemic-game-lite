import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';

export function Ending(props: {leaderStyle: {ele: JSX.Element, bg: string}, onClick: Function}){
    return <div  className={`min-h-full p-2 flex flex-col justify-between items-center bg-${props.leaderStyle.bg}`}>
        <Txt.Subtitle value={'Your leadership style is:'} col='black' />
        { props.leaderStyle.ele }
        <Btn.Bouncy 
            col={'white'}
            bg={'yellow-600'}
            value={'See what everyone else got'} 
            onClick={()=>{ props.onClick() }} 
        />
    </div> 
}

export function ViewEnding(props: {leaderStyle: {ele: JSX.Element, bg: string}, onClick: Function}){
    return <div className={`min-h-full p-2 flex flex-col justify-between items-center bg-${props.leaderStyle.bg}`} >
        { props.leaderStyle.ele }
        <Btn.Bouncy value={'Back'} onClick={()=>{ props.onClick() }} />
    </div> 
}

export function AllEndings(props: {onClick: Function}){
    return <div className={`min-h-full flex flex-col justify-between items-center text-center bg-yellow-500`}>
        <div className='p-2 flex flex-col justify-between items-center '>
            <Txt.Subtitle value='Find out about the other' col='black' />
            <Txt.Title value='Leadership styles:' col='black' />
        </div>
        
        <div className='w-full p-2 flex flex-col justify-center items-center bg-yellow-300'>
            <Txt.SectionTitle value='The reactionaries:' col='gray-700' />

            <div className='max-w-xs p-2 m-2 flex flex-col justify-center items-center' >
                <Btn.Rounded 
                    bg='red-500'
                    col='white'
                    value={'Flip-flopper'} 
                    onClick={()=>{props.onClick('FlipFlopper')}} />
                <p className='font-bold'>1 in 4 people are Flip-Floppers (25%)</p>
                <Txt.Text value='Flip-floppers focus on giving the public what they want. For example, Boris Johnson (UK).'  col='black'/>
            </div>
            <div className='max-w-xs p-2 m-2 flex flex-col justify-center items-center' >
                <Btn.Rounded 
                    bg='yellow-600'
                    col='white'
                    value={'Genghis Cannot'} 
                    onClick={()=>{props.onClick('GenghisCannot')}} />
                <p className='font-bold'>1 in 10 people are Ghenghis Cannots (10%)</p>
                <Txt.Text value='Once Gheghis Cannots make a choice they do not listen to new evidence (e.g., Donald Trump, USA)'  col='black'/>
            </div>
        </div>
        
        <div className='w-full p-2 flex flex-col justify-center items-center bg-green-400'>
            <Txt.SectionTitle value='The forward-thinkers:' col='gray-700' />
            <div className='max-w-xs p-2 m-2 flex flex-col justify-center items-center' >
                <Btn.Rounded 
                    bg='blue-500'
                    col='white'
                    value={'COVID-Bane'} 
                    onClick={()=>{props.onClick('CovidBane')}} />
                <p className='font-bold'>X in X people are Y</p>
                <Txt.Text value='COVID eliminators seek to achieve a zero-covid world by implementing strict lockdowns (e.g., Jacinda Ardern, New Zealand)'  col='black'/>
            </div>
            <div className='max-w-xs p-2 m-2 flex flex-col justify-center items-center' >
                <Btn.Rounded 
                    bg='green-600'
                    col='white'
                    value={'Economic Savior'} 
                    onClick={()=>{props.onClick('EconomicSavior')}} />
                <p className='font-bold'>X in X people are Y</p>
                <Txt.Text value='Economy savers deal first with COVID so that businesses can open up (e.g., Chung Seye-Kyun, South Korea)'  col='black'/>
            </div>
        </div>

        <div className='max-w-xs p-2 m-2 flex flex-col justify-center items-center'>
            <Txt.Subtitle value='How do we calculate these?' col='black'/>
            <Txt.Text value='We showed you a scenario where you could have responded in different ways. Your responses have consequences later down the line, like a story tree.'  col='black'/>
        </div>
    </div> 
}