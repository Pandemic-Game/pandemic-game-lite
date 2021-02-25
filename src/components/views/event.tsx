import React from 'react';
import {Event} from '../../model/Event';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';

export function EventScreen(props: {event: Event, onClick: Function}){
    return <div className='h-full p-2 flex flex-col justify-between items-center bg-yellow-500'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={'Event'} />
            <Txt.Title value={props.event.title} col='gray-900' />
        </div>
        <div className='flex flex-col'>
            <p className='m-2 p-2 max-w-lg text-lg text-center font-sans'>{props.event.description}</p>
            <Btn.Rounded 
                value={props.event.response1.label} 
                bg={'purple-900'}
                col={'white'}
                onClick={()=>{props.onClick(props.event.response1)}} 
            />
            <Btn.Rounded 
                value={props.event.response2.label} 
                bg={'purple-900'}
                col={'white'}
                onClick={()=>{props.onClick(props.event.response2)}} 
            />
        </div>
        <Btn.Sneaky onClick={()=>{props.onClick(props.event.response1)}} />
    </div> 
    // To-DO: Add extra info screen
}