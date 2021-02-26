import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { LeadershipStyle } from '../reputations';
import { Reputation } from '../../model/Reputation';

export function YourLeadershipStyle(props: {ending: Reputation, onClick: Function}){
    return <div  className={`min-h-full p-2 flex flex-col justify-between items-center bg-${'Reputation.bg'}`}>
        <Txt.Subtitle value={'Your leadership style is:'} />
        {
            props.ending.reputationComponent 
            //<LeadershipStyle />
        }
        <Btn.Bouncy 
            col={'Reputation.bg'}
            bg={'Reputation.col'}
            value={'See what everyone else got'} 
            onClick={()=>{ props.onClick() }} 
        />
    </div> 
}

export function ViewLeadershipStyle(props: {reputation: Reputation, onClick: Function}){
    return <div  className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'>
        {
            props.reputation.reputationComponent 
            //<LeadershipStyle />
        }
        <Btn.Bouncy value={'Back'} onClick={()=>{ props.onClick() }} />
    </div> 
}

export function AllLeadershipStyles(props: {onClick: Function}){
    return <div className='flex-column p-2'>
        <Btn.Rounded 
            bg='pink'
            col='white'
            value={'Flip-flopper'} 
            onClick={()=>{props.onClick()}} />
        <Btn.Rounded 
            bg='yellow'
            col='white'
            value={'Genghis cannot'} 
            onClick={()=>{props.onClick()}} />
        <Btn.Rounded 
            bg='blue'
            col='white'
            value={'COVID-bane'} 
            onClick={()=>{props.onClick()}} />
        <Btn.Rounded 
            bg='green'
            col='white'
            value={'Economic savior'} 
            onClick={()=>{props.onClick()}} />
    </div> 
    // To-DO: Add story tree
}