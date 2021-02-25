import React from 'react';

export function BigTitle(props) {
    return (
        <h1 className='m-4 p-2 flex text-7xl text-center font-custom'>
            {props.value}
        </h1>
    );
}

export function Title(props) {
    return (
        <h1 className={`m-2 p-2 flex text-3xl text-center text-${props.col} font-sans border-b border-${props.col}`}>
            {props.value}
        </h1>
    );
}

export function Subtitle(props) {
    return (
        <h1 className={`m-1 flex text-xl text-center text-${props.col} font-sans`}>
            {props.value}
        </h1>
    );
} 

export function Paragraph(props) { // Line break split into new p for new line
    return (
        <div className={`max-w-lg flex flex-col text-lg text-center text-${props.col} font-sans`}>
            {props.value.split(/(?:\r\n|\r|\n)/g).map(str => <p className='m-1'>{str}</p>)}
        </div>
    );
}

export function Text(props) { // Line break split into new p for new line
    return (
        <p className={`max-w-lg text-lg text-left text-${props.col} font-sans`}> {props.value}</p>
    );
}

export function SpeechBubble(props){
    return (
        <div className='SpeechBubble'>
            <p className='p-2 Paragraph'>
                {props.value}
            </p>
        </div>
    );
}

export function Reaction(props){
    return (
        <div className='Reaction'>
            <i className={`ReactionFace ${props.face}`}></i>
            <h5 style={{fontWeight: 'bold'}}> {props.title} </h5>
            <p> {props.paragraph} </p>
        </div>
    );
}