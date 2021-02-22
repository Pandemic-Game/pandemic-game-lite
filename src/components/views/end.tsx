import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { Reputation } from '../../model/Reputation';

export function EventScreen(props: {ending: Reputation, onClick: Function}){
    return <div>
        {props.ending.reputationComponent}
        <Btn.Rounded value={'View all profiles'} onClick={()=>{props.onClick()}} />
    </div> 
    // To-DO: Add view all stories
    // To-DO: Add story tree
}