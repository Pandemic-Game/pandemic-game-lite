import React from 'react';
import BarEconomy from '../assets/SVG/bar-economy.svg';
import BarPublic from '../assets/SVG/bar-public.svg';
import BarHealth from '../assets/SVG/bar-health.svg';
import * as Btn from './buttons';
import * as Txt from './text';

function LeadershipStyle(props: {
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
        bg: string;
        col: string;
    }
}) {
    return <div className={`min-h-full p-2 m-2 flex flex-col justify-between items-center text-${props.style.col}`}>
        <Txt.Title value={props.name} col='black' />
        <img src={props.icon} className='m-2' alt='Leadership style icon'/>

        <Txt.Text value={`A ${props.name} you may know:`} />
        <div className='flex flex-row'> <Txt.Text value={props.example.name} /> <Btn.ViewSource /> </div>

        <div className='flex flex-row justify-center align-start'>
            <img src={BarPublic} alt='Focus on public'/>
            <img src={BarEconomy} alt='Focus on economy'/>
            <img src={BarHealth} alt='Focus on health'/>
        </div>
        <Txt.Paragraph value={props.description} />
    </div> 
    // To-Do: Example description extra info popover
}

export function GenghisCannot(){
    return(
        <LeadershipStyle             
            name = 'Genghis Cannot'
            example = {{
                name: 'Donald Trump (USA)',
                description: 'Former president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
            }}
            icon = ''
            description = {`
                You would think that the way to grow the economy is to keep all the businesses open, wouldn't you?
                The cost of treating COVID-19 is extremely expensive. In fact, this is so expensive that medical costs become greater than the cost of a short lockdown to businesses.
            `}
            values = {{
                public: 75,
                economy: 20,
                healthcare: 10
            }}
            style = {{
                bg: 'yellow-500',
                col: 'black'
            }}
        />
    )
}
