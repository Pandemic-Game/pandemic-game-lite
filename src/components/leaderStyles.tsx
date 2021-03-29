import React from 'react';
import IconForGenghisCannot from '../assets/SVG/IconForGenghisCannot.svg';
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
        <img 
            src={props.icon} 
            style={{width: '25%'}}
            alt='Focus on public'
        />
        <Txt.Text value={`Example of a ${props.name}:`}  col='black'/>
        <div className='flex flex-row'>
            <Txt.Text value={props.example.name}  col='black'/>
            <Btn.ViewSource
                sourceDetails={props.example.sourceDetails}
                onClick={props.onClickSource}
            />
        </div>

        <Txt.ProphecySubTitle value='Epilogue prophecy:' col='black'/>

        <Txt.Prophecy value={props.description}  col='black'/>

    </div>
    // To-Do: Implement icons: <img src={props.icon} className='m-2' alt='Leadership style icon'/>
    // To-Do: Example description extra info popover
}

export function GenghisCannot(props:{onClickSource: Function}){
    return(
        <LeadershipStyle
            name = 'Genghis Cannot'
            example = {{
                name: 'United States of America',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.bbc.co.uk/news/world-us-canada-52407177',
                    description: 'Former president Trump refused to lock down the USA in 2020.'
                }
            }}
            icon = {IconForGenghisCannot}
            description = {`
                The tale of the Ghengis Cannot is one sapped in wrath and sorrow. Putting pride before all else, they risked everything to appear invincible.

                It did not end well.
                
                Months into the pandemic, the Ghengis Cannot lost everything. The people's confidence. The support of their round table. And, most importantly, their title.
                
                Their people rebelled, putting another leader in Ghengis's place. One they hope will put their safety first. Cases are finally beginning to fall, all while Ghengis shuts themself away in a palace. Silent, shamed, and alone.
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
                name: 'New Zealand',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.bbc.co.uk/news/world-asia-53274085',
                    description: 'Jacinda Ardern‘s tactic of locking New Zealand down early and closing borders resulted in comparatively lower cases and deaths in the country.'
                }
            }}
            icon = ''
            description = {`
                All hail the Covid Terminator! Savior of the lands! Guardian of the people! Bask in their glory and wonder!

                The pandemic was short-lived thanks to the Terminator's actions.

                When once their methods were criticised as harsh and cruel by their people, now the populous sings the Terminator's praises asthe disease is purged from their land.

                Even the pesky economists are placated. A trying task, indeed.

                The Covid Terminator is the envy of all the world. Black Death whom? You do not know of she.
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
                name: 'South Korea',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.bbc.co.uk/news/world-asia-51836898',
                    description: 'Under Chung Sye-Kyun‘s proficient leadership and management of low COVID-19 cases no lockdowns, roadblocks or restrictions of movement were put in place. Consequently, they are one of the only economies to grow, not shrink, during the pandemic.'
                }
            }}
            icon = ''
            description = {`
                Feast thine eyes upon the Business Guru, liberator of coin purses!

                At first, their choice to prioritise the exchange of goods and services seemed a fairy tale. But with a little faith, trust, and precautionary measure, their land just may survive yet.

                As the pandemic continues, the people are warming to their Business Guru. They see now the method to the madness - the forward-thinking that saved thousands of professions.

                There is still much to do in lowering case numbers, but for now, citizens can take comfort in having a prosperous land in which to return.
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
                name: 'United Kingdom',
                sourceDetails: {
                    sourceName: 'Their response to COVID-19',
                    link: 'https://www.theguardian.com/business/2021/jan/25/uk-response-covid-19-u-turns',
                    description: 'From delaying the initial lockdown to opening it up again with restrictions in place, the UK has been in and out of lockdowns ever since. Prime minister Boris Johnson has been ridiculed for his "flip-flopping" attitude to lockdown.'
                }
            }}
            icon = ''
            description = {`
                And so it was. The Flip-Flopper spent the remaining months of the pandemic trying to appease the  populous by bending to their will and their will alone.

                The Flop-Flopper's ever-changing  methods led to many a confused citizen debating on face covering protocol and in-person tavern dining.
                
                Instead of building rapport with their people, it seems Lord Flip Flopper lost sight of what was truly important - putting an end to this dastardly disease.
                
                Only time will tell if Lord Flip Flopper will lose their title or if the people will give them a second chance.
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
