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
                    link: 'https://www.bbc.co.uk/news/world-us-canada-52407177',
                    description: 'Former president Trump refused to acknowledge the seriousness of COVID and instead of locking down he suggested injecting cleaning chemicals'
                }
            }}
            icon = ''
            description = {`
                Once Ghengis Cannots make a choice, they don't listen to new evidence from any side. They value their own opinions over just about anything and anyone.
                The Ghengis Cannot response isn't particularly effective for the economy or COVID-19 cases or the public. You're a free agent, man.
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
            name = 'Covid Terminator'
            example = {{
                name: 'Jacinda Ardern (NZ)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.bbc.co.uk/news/world-asia-53274085',
                    description: 'New Zealand‘s tactic of locking down early and closing borders resulted in comparatively lower cases and deaths in the country.'
                }
            }}
            icon = ''
            description = {`
                COVID Terminators are the heroes we don't deserve. They are strict with lockdown policies and prioritise advice from healthcare officials to contain COVID as quickly as possible.
                The COVID Terminator's response is extremely effective for lowering COVID-19 cases and encourage a ZERO COVID scenario.
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
            name = 'Business Guru'
            example = {{
                name: 'Chung Sye-Kyun (SK)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.bbc.co.uk/news/world-asia-51836898',
                    description: 'Under Chung Sye-Kyun‘s leadership no lockdowns, roadblocks or restrictions of movement were put in place.'
                }
            }}
            icon = ''
            description = {`
                Business Gurus want to grow and protect the economy at all costs. To them, a thriving economy proves that society can't be hindered by a pesky little virus.
                The Business Guru response isn't very effective for lowering COVID-19 cases and has mixed reactions from the public.
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
            name = 'Flip-flopper'
            example = {{
                name: 'Boris Johnson (UK)',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.theguardian.com/business/2021/jan/25/uk-response-covid-19-u-turns',
                    description: 'From delaying the initial lockdown to opening it up again with restrictions in place, the UK has been in and out of lockdowns ever since.'
                }
            }}
            icon = ''
            description = {`
                Flip-floppers value public opinion most. So when the public turns lockdown, they open things up. When the public wants to stay inside, they issue lockdown orders.
                The Flip-flopper response isn't particularly effective for the economy or COVID-19 cases.
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
