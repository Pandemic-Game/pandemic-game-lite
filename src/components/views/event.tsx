import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import {Event} from '../../model/Event';

export function EventScreen(props: {event: Event, onClick: Function}){
    return <div>
        <Txt.Title value={props.event.title} />
        <Txt.Paragraph value={props.event.description} />
        <Btn.Rounded value={props.event.response1.label} onClick={()=>{props.onClick(props.event.response1)}} />
        <Btn.Rounded value={props.event.response2.label} onClick={()=>{props.onClick(props.event.response1)}} />
        <Btn.Sneaky value={'Psst. Wanna see some data?'} />
    </div> 
    // To-DO: Add extra info screen
}