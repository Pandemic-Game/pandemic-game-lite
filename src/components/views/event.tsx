import React, { useEffect } from 'react';
import { Event } from '../../model/Event';
import { faUserMd, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Lines from '../lines';
import { useThemeContext } from '../../ThemeProvider';
import { WarningSign } from '../warning-sign';
import Joe from "../../assets/SVG/advisor-joe.svg";
import Daisy from "../../assets/SVG/advisor-daisy.svg";
import Bob from "../../assets/SVG/advisor-bob.svg";
import { Img } from "../../ImageCache";

export function EventScreen(props:
    {
        event: Event,
        onClick: {
            consult: Function
        }
    }) {
    const bgColorClass = "bg-yellow-400"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    const getStageNumber = (eventTitle: string) => {
        switch(eventTitle){
            case "Welcome to the jungle": return 1
            case "2 KOOL 4 SKOOL": return 2
            case "Cabin Fever" : return 2
            case "But at what cost?" : return 3
            case "Bad Moon Rising" : return 3
            case "Where Is My Mind?" : return 3
        }
    }

    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={`Event ${getStageNumber(props.event.title)} of 3`} col='black' />
            <Txt.Title value={props.event.title} col='black' />
        </div>
        <div className='animate__animated animate__fadeIn m-2 p-2 flex flex-row items-start'>
            <div className='m-2 p-2 flex flex-row'>
                <WarningSign />
            </div>
            <Txt.Paragraph value={props.event.description} col='black' />
        </div>
        <Btn.Rounded
            value={'Show me some advice'}
            bg={'green-600'}
            col={'white'}
            onClick={() => { props.onClick.consult() }}
        />
    </div>
}

export function EventExtra(props: { event: Event, onClickSource: Function, onClickBack: Function }) {
    return <div className='min-h-full p-2 flex flex-col items-center bg-yellow-400'>
        <Txt.Title value='Discussion' col='black' />
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.public}
            person='Joe'
            icon={Joe}
            onClick={props.onClickSource}
            delay={0}
        />
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.medical}
            person='Daisy'
            icon={Daisy}
            onClick={props.onClickSource}
            delay={1}
        />
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.business}
            person='Bob'
            icon={Bob}
            onClick={props.onClickSource}
            delay={2}
        />
        <Btn.Rounded
            value={'Make decision'}
            bg={'yellow-600'}
            col={'black'}
            onClick={() => { props.onClickBack() }}
        />
    </div>
}

export function EventResponse(props:
    {
        condition: 'science' | 'social';
        event: Event;
        onClick: Function;
    }) {
    const bgColorClass = "bg-yellow-400"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <Txt.Subtitle value={props.event.title} col='black' />
        <div className='animate__animated animate__fadeIn m-2 p-2 flex flex-row items-start'>
            <div className='m-2 p-2 flex flex-row'>
                <WarningSign />
            </div>
            <Txt.Paragraph value={props.event.description} col='black' />
        </div>
        <div className='w-4/5 flex flex-col justify-between items-center' style={{ marginTop: "auto" }}>
            <Txt.Title value={'Choose your response'} col='black' />
            <div className='w-full animate__animated animate__flipInX'>
                <Btn.Rounded
                    value={props.condition==='science' ? props.event.response1.label : props.event.response2.label}
                    bg={'green-600'}
                    col={'yellow-100'}
                    onClick={() => { props.onClick(props.condition==='science' ? props.event.response1 : props.event.response2) }}
                />
            </div>
            <Lines.OR col='black' />
            <Btn.Rounded
                value={props.condition==='science' ? props.event.response2.label : props.event.response1.label}
                bg={'none'}
                col={'black'}
                onClick={() => { props.onClick(props.condition==='science' ? props.event.response2 : props.event.response1) }}
            />
            <Lines.Hr my={0} col='black' />
        </div>
    </div>
}