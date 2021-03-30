import React, { useEffect } from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import * as Lines from '../lines';
import { Response } from '../../model/Response';
import { Indicators } from '../../model/Indicators';
import { useThemeContext } from '../../ThemeProvider';

export function FeedbackScreen1(props: { response: Response, feedback: JSX.Element, onClick: Function }) {
    const bgColorClass = "bg-purple-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.label} col={'white'} />
            <Txt.Title value={'The immediate reaction...'} col={'white'} />
        </div>    
        <div className="m-2">
            {props.feedback}
        </div>
        <div style={{ marginTop: "auto" }}>
            <Btn.Rounded
                value={'Continue'}
                col='gray-900'
                bg='yellow-500'
                onClick={() => { props.onClick() }}
            />
        </div>
    </div>
}

export function FeedbackScreen2(props:
    {
        response: Response,
        indicatorsLastTurn: Indicators,
        onClickContinue: Function,
        onClickExtra: Function,
        onClickSource: Function
    }) {
    const bgColorClass = "bg-purple-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })
    
    return <div className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.label} col={'white'} />
        </div>
        <Gfx.CaseGraphic 
            thisTurn={props.response.updatedIndicators} 
            lastTurn={props.indicatorsLastTurn}
            delay={0}
        />
        <Gfx.EconomyGraphic 
            indicators={props.response.updatedIndicators} 
            delay={4}
        />
        <Gfx.SupportBar 
            indicators={props.response.updatedIndicators} 
            response={props.response} 
            onClickSource={props.onClickSource} 
            delay={6}
        />
        <div className='flex flex-col justify-center align-center' style={{ marginTop: "auto" }}>
            <div className="mt-2">
                <Btn.SneakyFeedback onClick={() => { props.onClickExtra() }} />
            </div>
            <Btn.Rounded
                value={'Continue'}
                col='gray-900'
                bg='yellow-500'
                onClick={() => { props.onClickContinue() }}
            />
        </div>
    </div>
}

export function FeedbackExtra(props: { response: Response, onClickBack: Function, onClickSource: Function }) {
    const bgColorClass = "bg-purple-900"
    const context = useThemeContext()

    useEffect(() => {
        context.changeBgColorClass(bgColorClass)
    })

    return <div className={`min-h-full p-2 flex flex-col justify-between items-center ${bgColorClass}`}>
        <Txt.Title value={'How our data model works:'} col='white' />
        <div className='p-2 m-2 flex flex-col justify-start items-start text-white font-medium font-sans'>

            <Txt.Subtitle value={'Public support'} col='white' />
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'YouGov',
                    link: 'https://yougov.co.uk',
                    description: 'YouGov is a global public opinion and data company. They conduct surveys on public opinions including reactions to new policies.'
                }} onClick={props.onClickSource} />
                <p>Public opinion of introducing policies (survey data)</p>
            </div>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'Wiki',
                    link: 'https://en.wikipedia.org/wiki/Sunk_cost',
                    description: 'The longer restrictions continue the harder people will find it to cope (lockdown fatigue). Additionally, once people have invested in a course of action they resist changing their mind (sunk cost fallacy: for more info see link). These phenomena affect how much people support implementing and continuing restrictions.'
                }} onClick={props.onClickSource} />
                <p>Psychological effects of lockdown fatigue and sunk cost fallacy</p>
            </div>
            <Lines.Hr my={4} col='white' />

            <div className='w-full flex flex-row justify-between'>
                <Txt.Subtitle value={'COVID-19 cases'} col='white' />
                <a
                    className='text-yellow-200'
                    href='http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button
                        className={`p-1 rounded-lg bg-yellow-500 text-md text-black font-custom`}
                    >
                        View data model
                    </button>
                </a>
            </div>
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'EpidemicForecasting.Org',
                    link: 'http://epidemicforecasting.org',
                    description: 'EpidemicForecasting.org gives estimates for how much policies affect the R value. It was created by a team of researchers from organisations including Oxford and Harvard.'
                }} onClick={props.onClickSource} />
                <p>Policies which affect the infection rate, such as lockdown</p>
            </div>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'Our data model',
                    link: 'https://github.com/felix19350/pandemic-game-narrative-poc/blob/feature/integrated-simulator/src/scenarios/UK.ts',
                    description: 'In our data model for cases and economy we make the assumption that once hospital capacity is reached individuals start self-isolating even if the government has not issued lockdown.'
                }} onClick={props.onClickSource} />
                <p>People self-isolate when cases are extremely high</p>
            </div>
            <Lines.Hr my={4} col='white' />


            <div className='w-full flex flex-row justify-between'>
                <Txt.Subtitle value={'Economy'} col='white' />
                <a
                    className='text-yellow-200'
                    href='http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button
                        className={`p-1 rounded-lg bg-yellow-500 text-md text-black font-custom`}
                    >
                        View data model
                    </button>
                </a>
            </div>
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'The Spectator',
                    link: 'https://www.spectator.co.uk/article/the-true-cost-of-coronavirus-on-our-economy',
                    description: 'Estimates place the cost of lockdown on the economy around 20-30% of the usual business income'
                }} onClick={props.onClickSource} />
                <p>The cost of lost business revenue (~20-30% when restrictions in place)</p>
            </div>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'Imperial College Business School',
                    link: 'https://voxeu.org/article/uk-lockdown-balancing-costs-against-benefits',
                    description: 'The cost of a quality life year is £30,000 so each early death due to COVID-19 costs the economy as well as the medical costs for treating COVID-19 patients.'
                }} onClick={props.onClickSource} />
                <p>The costs of hospitalisations (20% of cases) and deaths (1% of cases) as a result of COVID-19</p>
            </div>
        </div>

        <Btn.Rounded
            value={'Back to the game'}
            col='gray-900'
            bg='yellow-500'
            onClick={() => { props.onClickBack() }}
            animate='bounce'
        />
    </div>
}

/* 
Immunity not calculated due to no significant effect in early 2021
<div className='p-2 flex flex-row items-start'>
    <Btn.ViewSource sourceDetails={{
        sourceName: 'Click to see model for all data',
        link: 'https://github.com/felix19350/pandemic-game-narrative-poc/blob/feature/integrated-simulator/src/scenarios/UK.ts',
        description: '6% of the population are effectively immunised per month in the UK (GOV UK). We take into account the 50% effectiveness of the 1st jab (BMJ) and the natural immunity of the population to COVID (10%).'
    }} onClick={props.onClickSource} />
    <p>6% of the population are effectively immunised per month</p>
</div>
*/