import React, { useEffect } from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { Event } from '../../model/Event';
import { useThemeContext } from '../../ThemeProvider';
import { Response, ResponseItem } from '../../model/Response';
import { Indicators } from '../../model/Indicators';

export function Information(props: {
    event: Event;
    feedItems: JSX.Element;
    preferences: 'recommended' | 'all';
    onClick: {
        extraInfo: Function;
        continue:  Function;
    } 
}) {
    const bgColorClass = "bg-gray-900";
    const context = useThemeContext();

    // Information (science & social)
    const scienceDataForLockdown = {
        newCases:{
            lockdown: props.event.response1.updatedIndicators.newCases,  // response1 = lockdown
            noLockdown: props.event.response2.updatedIndicators.newCases  // response2 = no lockdown
        },
        lockdownCosts:{
            lockdown: props.event.response1.updatedIndicators.lockdownCosts,
            noLockdown: props.event.response2.updatedIndicators.lockdownCosts
        },
        medicalCosts:{
            lockdown: props.event.response1.updatedIndicators.medicalCosts,
            noLockdown: props.event.response2.updatedIndicators.medicalCosts
        }
    }
    const socialDataAgainstLockdown = {
        pollUnsure: 100 - props.event.response1.updatedIndicators.supportForLastResponse, // n unsure about lockdown
        feedAgainst: props.feedItems
    }

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })
    return (
        <div>
            <div className='p-2 flex justify-end align-end text-white'>
                {Btn.Dropdown(
                    { 
                        onClick: props.onClick.extraInfo, 
                        preferences: props.preferences 
                    }
                )}
            </div>
            <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
                <div className='rounded border mb-3 p-2'>
                    <Txt.Title value={`People are arguing that you should:`} col='white'/>
                    <div className='rounded bg-green-500'>
                        <Txt.Subtitle value={`${props.event.response2.label}`} col='white'/>
                    </div>
                    <Txt.Title value={`but should not:`} col='white'/>
                    <div className='rounded bg-red-500'>
                        <Txt.Subtitle value={`${props.event.response1.label}`} col='white'/>
                    </div>
                </div>
                <Txt.Title value={`News feed`} col='white'/>
                <div id='social'>
                    {socialDataAgainstLockdown.feedAgainst}
                    <Gfx.SupportBar 
                        n={socialDataAgainstLockdown.pollUnsure}
                        delay={0}
                    />
                </div>
                <AdditionalInfo
                    science={scienceDataForLockdown}
                    preferences = {props.preferences}
                    onClickContinue={props.onClick.continue}
                />
                <div className='w-full mt-auto'>
                    <Btn.Rounded onClick={props.onClick.continue} value='Continue'  bg='purple-700' col='white' />
                </div>
            </div>
        </div>
    )
    
    //Old button: <Btn.Rounded onClick={() => { props.onClick.extraInfo() }} value='See alternative news'  bg='' col='blue-600' />
}

export function AdditionalInfo(props:{
    science:{
        newCases:{
            lockdown: number;
            noLockdown: number;
        },
        lockdownCosts:{
            lockdown: number;
            noLockdown: number;
        },
        medicalCosts:{
            lockdown: number;
            noLockdown: number;
        }
    };
    preferences: 'recommended' | 'all';
    onClickContinue: Function;
}) {
    const bgColorClass = "bg-gray-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })
    switch(props.preferences){
        case 'all': return (
            <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
                <div id='science'>
                    <Gfx.CaseGraphic 
                        newCases = {props.science.newCases}
                        delay={0}
                    />
                    <Gfx.EconomyGraphic 
                        lockdownCosts={props.science.lockdownCosts}
                        medicalCosts={props.science.medicalCosts}
                        delay={3}
                    />
                </div>
            </div>
        );
        default: return <></>
    }
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