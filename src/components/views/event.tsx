import React, { useEffect } from 'react';
import { Event } from '../../model/Event';
import { faUserMd, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Lines from '../lines';
import { useThemeContext } from '../../ThemeProvider';
import { WarningSign } from '../warning-sign';

export function EventScreen(props:
    {
        event: Event,
        onClickResponse: Function,
        onClickExtraInfo: Function
    }) {
    const bgColorClass = "bg-yellow-400"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col justify-between items-center ${bgColorClass}`}>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={'Event:'} col='black' />
            <Txt.Title value={props.event.title} col='gray-900' />
        </div>
        <div className='animate__animated animate__fadeIn m-2 p-2 flex flex-row items-start'>
            <div className='m-2 p-2 flex flex-row'>
                <WarningSign />
            </div>
            <Txt.Paragraph value={props.event.description} col='black' />
        </div>
        <div className='w-4/5 flex flex-col justify-between items-center '>
            <Lines.Hr my={0} col='black' />
            <Btn.Rounded
                value={props.event.response1.label}
                bg={'purple-900'}
                col={'white'}
                onClick={() => { props.onClickResponse(props.event.response1) }}
            />
            <Lines.OR />
            <Btn.Rounded
                value={props.event.response2.label}
                bg={'purple-900'}
                col={'white'}
                onClick={() => { props.onClickResponse(props.event.response2) }}
            />
            <Lines.Hr my={0} col='black' />
        </div>
        <Btn.Sneaky onClick={() => { props.onClickExtraInfo() }} />
    </div>
}

export function EventExtra(props: { event: Event, onClickSource: Function, onClickBack: Function }) {
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-yellow-400'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={'Event:'} col='black' />
            <Txt.Title value={props.event.title} col='gray-900' />
        </div>
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.public}
            person='Joe the Regular Joe'
            icon={faUser}
            onClick={props.onClickSource}
        />
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.business}
            person='Bob the Businessman'
            icon={faUserTie}
            onClick={props.onClickSource}
        />
        <Txt.SpeechBubble
            extraDetail={props.event.extraDetails.medical}
            person='Daisy the Doctor'
            icon={faUserMd}
            onClick={props.onClickSource}
        />
        <Btn.Bouncy
            value={'Back'}
            bg={'purple-900'}
            col={'white'}
            onClick={() => { props.onClickBack() }}
        />
    </div>
}