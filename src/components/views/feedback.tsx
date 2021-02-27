import React from 'react';
import * as Btn from '../buttons';
import * as Txt from '../text';
import * as Gfx from '../infographics';
import * as Lines from '../lines';
import {Response} from '../../model/Response';

export function FeedbackScreen1(props: {response: Response, feedback: JSX.Element, onClick: Function}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.getParentEvent().title} col={'white'} />
            <Txt.Title value={props.response.label} col={'white'} />
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

export function FeedbackScreen2(props: {response: Response, onClickContinue: Function, onClickExtra: Function}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Subtitle value={props.response.getParentEvent().title} col={'white'} />
            <Txt.Title value={props.response.label} col={'white'} />
        </div>
        <div>
            Cases
            <p>{props.response.updatedIndicators.newCases}</p>
        </div>
        <div>
            Economy
            <p>{props.response.updatedIndicators.lockdownCosts}</p>
            <p>{props.response.updatedIndicators.medicalCosts}</p>
        </div>
        <Btn.Rounded 
            value={'Continue'} 
            col='gray-900'
            bg='yellow-500'
            onClick={()=>{props.onClickContinue()}}
        />
        <Btn.SneakyFeedback onClick={() => { props.onClickExtra() }} />
    </div> 
}

export function FeedbackExtra(props: {response: Response, onClick: Function}){
    return <div className='min-h-full p-2 flex flex-col justify-between items-center bg-purple-900'>
        <div className='flex flex-col justify-between items-center'>
            <Txt.Title value={'Some data'} col='white' />
        </div>

        <Txt.Subtitle value={'In the game:'} col='yellow-400' />
        <div className='p-2 m-2 flex flex-col justify-between items-start text-white font-medium font-sans'>

            <Txt.Subtitle value={'Public support'} col='white' />
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource /> <p>Public support or opposition for introducing policies</p>
            </div>
            <Lines.Hr my='4'/>

            <Txt.Subtitle value={'COVID-19 cases'} col='white' />
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource /> <p>Policies which affect the infection rate, such as lockdown</p>
            </div>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource /> <p>6% of the population are effectively immunised per month (little effect in early 2021)</p>
            </div>
            <Lines.Hr my='4'/>
            
            <Txt.Subtitle value={'Economy'} col='white' />
            <h5 className='text-yellow-500'>Is affected by:</h5>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource /> <p>The cost of lockdown (1/3 the usual business income)</p>
            </div>
            <div className='p-2 flex flex-row items-start'>
                <Btn.ViewSource /> <p>The costs of hospitalisations (20% of cases) and deaths (1% of cases) as a result of COVID-19</p>
            </div>
        </div>

        <Btn.Rounded 
            value={'Back to the game'} 
            col='gray-900'
            bg='yellow-500'
            onClick={()=>{ props.onClick()} } 
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
                <li>Geopolitical factors affecting transmission rates such as population density, poverty and civil obedience</li>
                <li>Other differences that non-European / non-American countries may face</li>
            </ul>
        </div>
    </div> 
}