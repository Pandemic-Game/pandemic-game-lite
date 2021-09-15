import React, { useEffect } from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import { Event } from '../../model/Event';
import { useThemeContext } from '../../ThemeProvider';
import { Response, ResponseItem } from '../../model/Response';
import { Indicators } from '../../model/Indicators';
import { Img } from "../../ImageCache";
import pulseLogo from "../../assets/SVG/outbreak-pulse-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export function Information(props: {
    condition: 'science' | 'social';
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
    const social = ():JSX.Element => {
        return(
            <div id='social'>
                {socialDataAgainstLockdown.feedAgainst}
                <Gfx.SupportBar 
                    n={socialDataAgainstLockdown.pollUnsure}
                    delay={0}
                />
            </div>
        )
    }
    const science = ():JSX.Element => {
        return(
            <div id='science'>
                <Gfx.CaseGraphic 
                    newCases = {scienceDataForLockdown.newCases}
                    delay={0}
                />
                <Gfx.EconomyGraphic 
                    lockdownCosts={scienceDataForLockdown.lockdownCosts}
                    medicalCosts={scienceDataForLockdown.medicalCosts}
                    delay={3}
                />
            </div>
        )
    }

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })
    return (
        <div>
            <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
                <Img 
                    className={`m-auto w-32 m-2`}
                    src={pulseLogo}
                    alt={'Pulse news feed'}
                />
                <div className='flex flex-row items-center mb-5'>
                    <FontAwesomeIcon icon={faAngleDoubleDown}  className='m-2 animate__animated animate__fadeOutDown animate__delay-2s animate__slower animate__repeat-3' size="lg" color="white" />
                    <Txt.Title value={`News feed`} col='white'/>
                    <FontAwesomeIcon icon={faAngleDoubleDown}  className='m-2 animate__animated animate__fadeOutDown animate__delay-2s animate__slower animate__repeat-3' size="lg" color="white" />
                </div>
                {props.condition==='science' ? science() : social()}
                {Btn.Dropdown(
                    { 
                        onClick: props.onClick.extraInfo, 
                        preferences: props.preferences 
                    }
                )}
                <AdditionalInfo
                    hiddenInfo={props.condition==='science' ? social() : science()}
                    preferences = {props.preferences}
                    onClickContinue={props.onClick.continue}
                />
                <div className='w-full mt-auto'>
                    <Btn.Rounded onClick={props.onClick.continue} value='Continue'  bg='green-600' col='white' />
                </div>
            </div>
        </div>
    )
    
    //Old button: <Btn.Rounded onClick={() => { props.onClick.extraInfo() }} value='See alternative news'  bg='' col='blue-600' />
}

export function AdditionalInfo(props:{
    hiddenInfo:JSX.Element;
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
                {props.hiddenInfo}
            </div>
        );
        default: return <></>
    }
}