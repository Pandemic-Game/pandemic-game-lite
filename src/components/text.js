import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function BigTitle(props) {
    return (
        <h1 className='m-4 p-2 flex text-7xl text-center font-custom'>
            {props.value}
        </h1>
    );
}

export function Title(props) {
    return (
        <h1 className={`m-2 p-2 flex text-4xl text-center text-${props.col} font-custom border-b-2 border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Subtitle(props) {
    return (
        <h1 className={`m-1 flex text-xl text-center text-${props.col} font-custom`}>
            {props.value}
        </h1>
    );
} 

export function SectionTitle(props) {
    return (
        <h1 className={`m-4 p-4 flex text-3xl text-center text-${props.col} font-custom border-b-2 border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Paragraph(props) { // Line break split into new p for new line
    return (
        <div className={`max-w-lg flex flex-col text-lg text-left text-${props.col} font-sans font-medium`}>
            {props.value.split(/(?:\r\n|\r|\n)/g).map(str => <p className='m-1'>{str}</p>)}
        </div>
    );
}

export function Text(props) { // Line break split into new p for new line
    return (
        <p className={`max-w-lg text-lg text-${props.col} font-sans font-medium`}> {props.value}</p>
    );
}

export function SpeechBubble(props){
    return (
        <div className='w-4/5 flex flex-col text-lg text-left font-sans font-medium'>
            <p className='m-2 p-2 bg-white rounded-xl'>
                {props.comment}
            </p>
            <div className='flex flex-row align-center'>
                <FontAwesomeIcon icon={props.icon} size='2x' />
                <p className='mx-2 text-gray-50'> {props.person} </p>
            </div>
        </div>
    );
}