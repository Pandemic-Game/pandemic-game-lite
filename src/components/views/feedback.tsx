import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import {Response} from '../../model/Response';

export function FeedbackScreen(props: {response: Response, onClick: Function}){
    const e = props.response;
    const i = e.updatedIndicators;
    return <div className='flex-column p-2'>
        <Txt.Title value={e.getParentEvent().title} />
        <Txt.Title value={e.label} />
        {e.socialMediaResponse}
        <Gfx.SupportBar support={i.newCases} dontKnow={10} oppose={900-i.newCases} />
        <Btn.Rounded value={'Continue'} onClick={()=>{props.onClick()}} />
        <Btn.Sneaky value={'Psst. Wanna see some data?'} />
    </div> 
    // To-DO: Add extra info screen
}