import React from 'react';
import {ExtraDetail} from '../model/Event';
import * as Btn from './buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function BigTitle(props: {value: string}) {
    return (
        <h1 className='m-4 p-2 flex text-7xl text-center font-custom'>
            {props.value}
        </h1>
    );
}

export function Title(props: {value: string, col: string | undefined}) {
    return (
        <h1 className={`m-2 p-2 flex text-4xl text-center text-${props.col} font-custom border-b-2 border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Subtitle(props: {value: string, col: string}) {
    return (
        <h1 className={`m-1 flex text-xl text-center text-${props.col} font-custom`}>
            {props.value}
        </h1>
    );
} 

export function SectionTitle(props: {value: string, col: string}) {
    return (
        <h1 className={`m-4 p-4 flex text-3xl text-center text-${props.col} font-custom border-b-2 border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Paragraph(props: {value: string, col: string}) { // Line break split into new p for new line
    return (
        <div className={`max-w-lg flex flex-col text-lg text-left text-${props.col} font-sans font-medium`}>
            {props.value.split(/(?:\r\n|\r|\n)/g).map(str => <p className='m-1'>{str}</p>)}
        </div>
    );
}

export function Text(props: {value: string, col: string}) { // Line break split into new p for new line
    return (
        <p className={`max-w-lg text-lg text-${props.col} font-sans font-medium`}> {props.value} </p>
    );
}
export function TextLite(props: {value: string, col: string}) { // Line break split into new p for new line
    return (
        <p className={`max-w-lg text-lg text-${props.col} font-sans font-light`}> {props.value} </p>
    );
}

export function SpeechBubble(props: {extraDetail: ExtraDetail, person: string, icon: any, onClick: Function}){
    return (
        <div className='w-4/5 m-2 flex flex-col text-lg text-left font-sans font-medium'>
            <div>
                <p className='m-2 p-2 bg-white rounded-xl'>
                    {props.extraDetail.speech}
                    <Btn.ViewSource sourceDetails={props.extraDetail.sourceDetails} onClick={props.onClick} />
                </p>
            </div>
            <div className='flex flex-row align-center'>
                <FontAwesomeIcon icon={props.icon} size='2x' />
                <p className='mx-2 text-black'> {props.person} </p>
            </div>
        </div>
    );
}