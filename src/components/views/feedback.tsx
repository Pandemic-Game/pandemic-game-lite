import React, { useEffect } from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { Response } from '../../model/Response';
import { Indicators } from '../../model/Indicators';
import { useThemeContext } from '../../ThemeProvider';

export function FeedbackScreen1(props: { response: Response, feedback: JSX.Element, onClick: {
    extraInfo: Function;
    continue:  Function;
} }) {
    const bgColorClass = "bg-gray-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <Txt.Title value={'Main Stream News'} col={'white'} />
        <Gfx.SupportBar 
            indicators={props.response.updatedIndicators} 
            response={props.response} 
            onClickSource={()=>{}} 
            delay={-1}
        />
        {props.feedback}
        <div className='w-full mt-auto'>
            <Btn.Rounded onClick={() => { props.onClick.extraInfo() }} value='See alternative news'  bg='' col='blue-600' />
            <Btn.Rounded onClick={() => { props.onClick.continue() }} value='Continue'  bg='green-600' col='yellow-100' />
        </div>
    </div>
}

export function FeedbackScreen2(props:
    {
        response: Response,
        indicatorsLastTurn: Indicators,
        onClickContinue: Function,
        onClickSource: Function
    }) {
    const bgColorClass = "bg-gray-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })
    
    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <Gfx.CaseGraphic 
            thisTurn={props.response.updatedIndicators} 
            lastTurn={props.indicatorsLastTurn}
            delay={0}
        />
        <Gfx.EconomyGraphic 
            indicators={props.response.updatedIndicators} 
            delay={4}
        />
        <Btn.Rounded
            value={'Continue'}
            col='yellow-100'
            bg='green-600'
            onClick={() => { props.onClickContinue() }}
        />
    </div>
}

/* 
Immunity not calculated due to no significant effect in early 2021
<div className='p-2 flex flex-row items-start'>
    <Btn.ViewSource sourceDetails={{
        sourceName: 'Click to see model for all data',
        link: 'https://github.com/felix19350/pandemic-game-narrative-poc/blob/feature/integrated-simulator/src/scenarios/UK.ts',
        description: '6% of the population are effectively immunised per month in the UK (GOV UK). We take into account the 50% effectiveness of the 1st jab (BMJ) and the natural immunity of the population to COVID (10%).'
    }} onClick={props.onClickSource} />
    <p>6% of the population are effectively immunised per month</p>
</div>
*/