import React from 'react';
import { ExtraDetail } from '../model/Event';
import * as Btn from './buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Global font properties */
export const textSize = (s: string) => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];
    const n = sizes.indexOf(s);
    const string = 
        'text-' + 
        `${sizes[n]} ` + 
        'sm:text-' + 
        `${sizes[n+1]} ` + 
        'md:text-' + 
        `${sizes[n+2]} ` + 
        'lg:text-' + 
        `${sizes[n+2]} ` + 
        'xl:text-' + 
        `${sizes[n+2]} ` + 
        '2xl:text-' + 
        `${sizes[n+3]}`
    return string;
}
export const subtitleSize = 'xl';
export const mainFont = `'Open Sans', sans-serif`;

// Components
export function Title(props: { value: string, col: string | undefined }) {
    return (
        <h1 className={`m-2 p-2 ${textSize('xl')} text-center text-${props.col} font-custom border-b-2 border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Subtitle(props: { value: string, col: string }) {
    return (
        <h1 className={`m-1 ${textSize('lg')} text-center text-${props.col} font-custom`}>
            {props.value}
        </h1>
    );
}

export function Paragraph(props: { value: string, col: string }) { // Line break split into new p for new line
    return (
        <div className={`max-w-lg flex flex-col`}
        >
            {props.value.split(/(?:\r\n|\r|\n)/g).map((str, idx) => 
                <p key={idx} className={`m-1 ${textSize('base')} font-semibold text-left text-${props.col}`} style={{fontFamily: mainFont}}>{str}</p>
            )}
        </div>
    );
}

export function Text(props: { value: string, col: string }) { // Line break split into new p for new line
    return (
        <p className={`max-w-lg ${textSize('base')} text-${props.col}`} style={{fontFamily: mainFont}}> {props.value} </p>
    );
}

export function SmallText(props: { value: string, col: string }) { // Line break split into new p for new line
    return (
        <p className={`${textSize('sm')} text-${props.col} font-light`} style={{fontFamily: mainFont}}> {props.value} </p>
    );
}

export function SpeechBubble(props: { extraDetail: ExtraDetail, person: string, icon: any, onClick: Function, delay: number }) {
    return (
        <div className={`max-w-2xl m-2 flex flex-col ${textSize('base')}`} style={{fontFamily: mainFont}}>
            <p className={`m-2 p-2 bg-white rounded-xl animate__animated animate__fadeInLeft animate__delay-${props.delay}s`}>
                {props.extraDetail.speech}
                <Btn.ViewSource sourceDetails={props.extraDetail.sourceDetails} onClick={props.onClick} />
            </p>
            <div className={`flex flex-row align-center animate__animated animate__fadeInLeft animate__delay-${props.delay}s`}>
                <FontAwesomeIcon icon={props.icon} size='2x' />
                <p className='mx-2 font-semibold' style={{fontFamily: mainFont}}> {props.person} </p>
            </div>
        </div>
    );
}