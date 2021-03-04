import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import * as Lines from '../lines';
import {Response} from '../../model/Response';
import { Indicators } from '../../model/Indicators';

export function FeedbackScreen1(props: {response: Response, feedback: JSX.Element, onClick: Function, onClickSource: Function}){
    const responseText = props.response.updatedIndicators.supportForLastResponse > 50 ? 'People liked that!' : 'Ooh... That was controversial!';
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.getParentEvent().title} col={'white'} />
            <Txt.Title value={props.response.label} col={'white'} />
        </div>
        <div className='flex flex-row justify-center items-center'>
            <Txt.Subtitle value={responseText} col={'white'} />
            <Btn.ViewSource sourceDetails={props.response.sourceDetails} onClick={props.onClickSource} />
        </div>
        <Gfx.SupportBar indicators={props.response.updatedIndicators} />
        {props.feedback}
        <Btn.Rounded 
            value={'Continue'} 
            col='gray-900'
            bg='yellow-500'
            onClick={()=>{props.onClick()}}
        />
    </div> 
}

export function FeedbackScreen2(props: 
{
    response: Response,
    indicatorsLastTurn: Indicators,
    onClickContinue: Function, 
    onClickExtra: Function
}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.getParentEvent().title} col={'white'} />
            <Txt.Title value={props.response.label} col={'white'} />
        </div>
        <Gfx.CaseGraphic thisTurn={props.response.updatedIndicators} lastTurn={props.indicatorsLastTurn} /> 
        <Gfx.EconomyGraphic indicators={props.response.updatedIndicators} />
        <Btn.Rounded 
            value={'Continue'} 
            col='gray-900'
            bg='yellow-500'
            onClick={()=>{props.onClickContinue()}}
        />
        <Btn.SneakyFeedback onClick={() => { props.onClickExtra() }} />
    </div> 
}

export function FeedbackExtra(props: {response: Response, onClickBack: Function, onClickSource: Function }){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Title value={'Some data'} col='white' />
        </div>

        <Txt.Subtitle value={'In the game:'} col='yellow-400' />
        <div className='p-2 m-2 flex flex-col justify-between items-start text-white font-medium font-sans'>

            <Txt.Subtitle value={'Public support'} col='white' />
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource sourceDetails={{
                    sourceName: 'YouGov',
                    link: 'https://yougov.co.uk',
                    description: 'YouGov is a global public opinion and data company. They conduct surveys on public opinions including reactions to new policies.'
                }} onClick={props.onClickSource} />
                <p>Public support or opposition for introducing policies</p>
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
                    sourceName: 'Click to see model for all data',
                    link: 'https://github.com/felix19350/pandemic-game-narrative-poc/blob/feature/integrated-simulator/src/scenarios/UK.ts',
                    description: '6% of the population are effectively immunised per month in the UK (GOV UK). We take into account the 50% effectiveness of the 1st jab (BMJ) and the natural immunity of the population to COVID (10%).'
                }} onClick={props.onClickSource} />
                <p>6% of the population are effectively immunised per month (no significant effect in early 2021)</p>
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
                <p>The cost of lockdown (20-30% the usual business income)</p>
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
            onClick={()=>{ props.onClickBack()} } 
            animate='bounce' 
        />
        
        <div className='mt-6'></div>
        <Txt.Subtitle value={'In the real world:'} col='yellow-400' />
        <div className='p-2 m-2 flex flex-col justify-between items-start font-sans'>
            <h5 className='text-white font-medium'>The above is true in the real world but there are other important factors to consider:</h5>
            <ul className='p-2 m-2 text-gray-300 list-disc'>
                <li>Delayed preventative treatments and assessments which will result in more serious interventions required for more severe health outcomes (for example increased and more severe cancer diagnoses)</li>
                <li>The health impacts of lockdown (such as from a sedentary lifestyle)</li>
                <li>The behavioural and mental health impacts of lockdown (such as increased depression and drinking)</li>
                <li>The long-term effects of COVID on health ("long-covid") and of poorer diets and limited exercise (e.g., child obesity increase)</li>
                <li>The effects of disrupted training and education</li>
                <li>The long term situation once enough people get vaccinated</li>
                <li>Geopolitical factors affecting transmission rates such as population density, poverty and civil obedience</li>
                <li>Other differences that non-European / non-American countries may face</li>
            </ul>
        </div>
    </div> 
}