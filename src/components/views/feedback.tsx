import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';

export function FeedbackScreen(props: any){
    const e = props.response;
    const i = e.updatedIndicators;
    return <div>
        <Txt.Title value={e.getParentEvent().title} />
        <Txt.Title value={e.label} />
        {e.socialMediaResponse}
        <Gfx.SupportBar support={i.newCases} dontKnow={10} oppose={900-i.newCases} />
        <Btn.Rounded value={'Continue'} onClick={()=>{props.onClick()}} />
        <Btn.Sneaky value={'Psst. Wanna see some data?'} />
    </div> 
    // To-DO: Add extra info screen
}