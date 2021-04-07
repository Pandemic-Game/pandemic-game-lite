import React from 'react';
import { ExtraDetail } from '../model/Event';
import * as Btn from './buttons';
import { Img } from "../ImageCache";

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

export function SpeechBubble(props: { extraDetail: ExtraDetail, person: string, icon: string, onClick: Function, delay: number }) {
    const people = (person: string) => {
        switch(person){
            case 'Joe': return 'Regular guy';
            case 'Bob': return 'Business owner';
            case 'Daisy': return 'Doctor';
            default: return '';
        }
    }
    return (
        <div className={`w-full max-w-2xl m-2 flex flex-row ${textSize('base')}`} style={{fontFamily: mainFont}}>
            <div className='w-1/4 flex flex-col justify-center text-center'>
                <Img src={props.icon} className='mx-auto' />
                <div className='p-2 bg-yellow-200 rounded-bl-xl rounded-br-xl'>
                    <strong><Text value={props.person} col='black' /></strong>
                    <SmallText value={people(props.person)} col='black' />
                </div>
            </div>
            <p className={`w-3/4 m-auto mx-2 p-2 bg-white text-center rounded-xl rounded-tl-none animate__animated animate__fadeInLeft animate__delay-${props.delay}s`}>
                <Text value={props.extraDetail.speech} col='black' />
                <Btn.ViewSource sourceDetails={props.extraDetail.sourceDetails} onClick={props.onClick} />
            </p>
        </div>
    );
}