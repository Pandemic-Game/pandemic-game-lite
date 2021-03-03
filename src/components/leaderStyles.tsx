import React from 'react';
import BarEconomy from '../assets/SVG/bar-economy.svg';
import BarPublic from '../assets/SVG/bar-public.svg';
import BarHealth from '../assets/SVG/bar-health.svg';
import * as Btn from './buttons';
import * as Txt from './text';
import { SourceDetails } from '../model/Event';

function LeadershipStyle(props: {
    name: string; 
    example: {
        name: string;
        sourceDetails: SourceDetails
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
    };
    onClickSource: Function;
}) {
    return <div className={`min-h-full p-2 m-2 flex flex-col justify-between items-center text-${props.style.col}`}>
        <Txt.Title value={props.name} col='black' />

        <Txt.Text value={`A ${props.name} you may know:`}  col='black'/>
        <div className='flex flex-row'> 
            <Txt.Text value={props.example.name}  col='black'/> 
            <Btn.ViewSource 
                sourceDetails={props.example.sourceDetails} 
                onClick={props.onClickSource} 
            /> 
        </div>

        <div className='flex flex-row justify-center align-start'>
            <img src={BarPublic} alt='Focus on public'/>
            <img src={BarEconomy} alt='Focus on economy'/>
            <img src={BarHealth} alt='Focus on health'/>
        </div>
        <Txt.Paragraph value={props.description}  col='black'/>
    </div> 
    // To-Do: Implement icons: <img src={props.icon} className='m-2' alt='Leadership style icon'/>
    // To-Do: Example description extra info popover
}

export function GenghisCannot(props:{onClickSource: Function}){
    return(
        <LeadershipStyle             
            name = 'Genghis Cannot'
            example = {{
                name: 'Donald Trump (USA)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: '',
                    description: 'Former president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
                }
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
            onClickSource = {props.onClickSource}
        />
    )
}

export function CovidTerminator(props:{onClickSource: Function}){
    return(
        <LeadershipStyle             
            name = 'Genghis Cannot'
            example = {{
                name: 'Donald Trump (USA)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'bbcnews.com/',
                    description: 'TFormer president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
                }
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
            onClickSource = {props.onClickSource}
        />
    )
}

export function BusinessGuru(props:{onClickSource: Function}){
    return(
        <LeadershipStyle             
            name = 'Genghis Cannot'
            example = {{
                name: 'Donald Trump (USA)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'bbcnews.com/',
                    description: 'TFormer president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
                }
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
            onClickSource = {props.onClickSource}
        />
    )
}

export function FlipFlopper(props:{onClickSource: Function}){
    return(
        <LeadershipStyle             
            name = 'Genghis Cannot'
            example = {{
                name: 'Donald Trump (USA)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'bbcnews.com/',
                    description: 'TFormer president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
                }
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
            onClickSource = {props.onClickSource}
        />
    )
}
