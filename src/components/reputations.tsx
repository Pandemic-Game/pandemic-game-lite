import React from 'react';
import BarEconomy from '../assets/SVG/bar-economy.svg';
import BarPublic from '../assets/SVG/bar-public.svg';
import BarHealth from '../assets/SVG/bar-health.svg';
import * as Btn from './buttons';
import * as Txt from './text';
import * as Gfx from './infographics';
import * as Lines from './lines';

export function LeadershipStyle(props: {
    name: string; 
    example: {
        name: string;
        description: string;
    };
    icon: string;
    description: string;
    values: {
        public: number;
        economy: number;
        healthcare: number;
    };
    style: {
        col: string;
    }
}) {
    return <div className={`min-h-full p-2 flex flex-col justify-between items-center text-${props.style.col}`}>
        <Txt.Title value={props.name} col='gray-900' />
        <img src={''} alt='Leadership style icon'/>

        <Txt.Subtitle value={`A ${props.name} you may know:`} />
        <div className='flex flex-row justify-center align-start'>
            <Txt.Text value={props.example.name} />
            <Btn.ViewSource />
        </div>

        <div className='flex flex-row justify-center align-start'>
            <img src={BarPublic} alt='Focus on public'/>
            <img src={BarEconomy} alt='Focus on economy'/>
            <img src={BarHealth} alt='Focus on health'/>
        </div>
        <Txt.Paragraph value={props.description} />
    </div> 
    // To-Do: Example description extra info popover
}