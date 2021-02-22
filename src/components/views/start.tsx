import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';

const introductionText = `
    You are a World Leader.
    Your job is to make decisions that support or polarize different parts of society. You will gain and lose reputation with Businesses, Healthcare and the Public.
    Will your country survive COVID-19?
`

export function Introduction(props: {onClick: Function}) {
    return(
        <div className='Introduction View yellow flex-column p-2'> 
            <Txt.BigTitle value={'Pandemic Game'} />
            <Txt.Paragraph value={introductionText} />
            <Btn.Rounded 
                value='Play the game' 
                className='default'
                onClick={props.onClick}
            />
        </div>
    );
}