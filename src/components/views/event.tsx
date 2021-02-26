import React from 'react';
import {Event} from '../../model/Event';
import { faUserMd, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import * as Lines from '../lines';

export function EventScreen(props: 
{
    event: Event, 
    onClickResponse: Function, 
    onClickExtraInfo: Function
}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={'Event:'} />
            <Txt.Title value={props.event.title} col='gray-900' />
        </div>
        <Txt.Paragraph value={props.event.description} />
        <div className='w-4/5 flex flex-col justify-between items-center '>
            <Lines.Hr col={'black'}/>
            <Btn.Rounded 
                value={props.event.response1.label}
                bg={'purple-900'}
                col={'white'}
                onClick={()=>{props.onClickResponse(props.event.response1)}} 
            />
            <Lines.OR />
            <Btn.Rounded 
                value={props.event.response2.label} 
                bg={'purple-900'}
                col={'white'}
                onClick={()=>{props.onClickResponse(props.event.response2)}} 
            />
            <Lines.Hr col={'black'}/>
        </div>
        <Btn.Sneaky onClick={()=>{props.onClickExtraInfo()}} />
    </div> 
}

export function EventExtra(props: {event: Event, onClick: Function}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={'Event:'} />
            <Txt.Title value={props.event.title} col='gray-900' />
        </div>
        <Txt.SpeechBubble comment={props.event.extraDetails.public} person='Joe the Regular Joe' icon={faUser} />
        <Txt.SpeechBubble comment={props.event.extraDetails.business} person='Bob the Businessman' icon={faUserTie} />
        <Txt.SpeechBubble comment={props.event.extraDetails.medical} person ='Daisy the Doctor' icon={faUserMd} />
        <Btn.Bouncy 
            value={'Back'} 
            bg={'purple-900'}
            col={'white'}
            onClick={()=>{props.onClick()}} 
        />
    </div> 
}