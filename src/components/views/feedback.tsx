import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import {Response} from '../../model/Response';

export function FeedbackScreen(props: {response: Response, onClick: Function}){
    const e = props.response;
    const i = e.updatedIndicators;
    return <div className='h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={e.getParentEvent().title} col={'white'} />
            <Txt.Title value={e.label} col={'white'} />
        </div>
        {e.socialMediaResponse}
        <Gfx.SupportBar support={i.newCases} dontKnow={10} oppose={900-i.newCases} />
        <Btn.Rounded 
            value={'Continue'} 
            col='gray-900'
            bg='yellow-500'
            onClick={()=>{props.onClick()}} 
            animate='bounce' />
        <Btn.SneakyFeedback value={'Psst. Wanna see some data?'} />
    </div> 
    // To-DO: Add extra info screen
}