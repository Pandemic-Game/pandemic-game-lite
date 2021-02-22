import React from 'react';

export function BigTitle(props) {
    return (
        <h1 className='display-1 BigTitle'>
            {props.value}
        </h1>
    );
}

export function Title(props) {
    return (
        <h1 className={`display-4 Title ${props.className}`}>
            {props.value}
        </h1>
    );
}

export function Paragraph(props) { // Line break split into new p for new line
    return (
        <div className='p-2 Paragraph'>
            {props.value.split(/(?:\r\n|\r|\n)/g).map(str => <p>{str}</p>)}
        </div>
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