import React, { useEffect } from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { Response } from '../../model/Response';
import { Indicators } from '../../model/Indicators';
import { useThemeContext } from '../../ThemeProvider';

export function FeedbackScreen1(props: { response: Response, feedback: JSX.Element, onClick: Function }) {
    const bgColorClass = "bg-gray-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <Txt.Title value={'The immediate reaction...'} col={'white'} />
        {props.feedback}
        <Btn.Rounded onClick={() => { props.onClick() }} value='See data over time'  bg='yellow-500' col='black' />
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
        <Gfx.SupportBar 
            indicators={props.response.updatedIndicators} 
            response={props.response} 
            onClickSource={props.onClickSource} 
            delay={6}
        />
        <Btn.Rounded
            value={'Continue'}
            col='gray-900'
            bg='yellow-500'
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