import { useState } from 'react';
import './App.css';
import "tailwindcss/tailwind.css";
import cloneDeep from 'lodash/cloneDeep';
import { Event } from './model/Event';
import { Response, History, ResponseItem } from './model/Response';
import { Indicators } from './model/Indicators';
import {UK} from './model/Scenario';
import * as Story from './assets/story';
import * as LeaderStyle from './components/leaderStyles';
import {Tweet, News, Meme} from './components/socialFeedback';
import {Splash, Introduction} from './components/views/start';
import {EventScreen, EventExtra} from './components/views/event';
import {FeedbackScreen1, FeedbackScreen2, FeedbackExtra} from './components/views/feedback';
import {Ending, AllEndings, ViewEnding} from './components/views/end';

// Load story
const firstEvent = Story.test1;

/**
 * Main game loop
*/

const App = () => {

  const [history, setHistory] = useState<Response[]>([]);
  const [event, setEvent] = useState<Event>(firstEvent); // Load first event
  const [view, setView] = useState('start');
  const [ending, setEnding] = useState<string>('');
  
  const initialScenario: Indicators = { // Load initial scenario
    supportForLastResponse: UK.initialPublicSupport,
    oppositionToLastResponse: 100-UK.initialPublicSupport,
    newCases: UK.initialNumInfected / UK.totalPopulation * 10000,
    lockdownCosts: UK.initialEconomicCosts,
    medicalCosts: UK.initialMedicalCosts
  }

  const endings: Record<string, {ele: JSX.Element, bg: string}> = {
    'GenghisCannot': {ele: <LeaderStyle.GenghisCannot />, bg: 'yellow-500'},
    'FlipFlopper': {ele: <LeaderStyle.GenghisCannot />, bg: 'red-500'},
    'CovidBane': {ele: <LeaderStyle.GenghisCannot />, bg: 'green-500'},
    'EconomicSavior': {ele: <LeaderStyle.GenghisCannot />, bg: 'blue-500'}
  };

  const response = ():Response => cloneDeep( history[history.length - 1] );
  const lastMonth = ():Indicators => history.length===1 ? initialScenario : cloneDeep( history[history.length - 1].updatedIndicators );

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {
    setHistory(history.concat(playerChoice));

    // Show new event or if at end show ending
    if (playerChoice.ending) {
      setEnding(playerChoice.ending)
    } else {
      setEvent(playerChoice.getNextEvent())
    }

    // Show feedback for choice
    setView('feedback1'); 
  }

  // Show new event
  const nextTurn = () => {
    if(ending){
      setView('end');
    } else {
      setView('event');
    }
  }

  // Show feedback
  const socialFeedback = (feedback:ResponseItem[]): JSX.Element => {
    function constructElement(it: ResponseItem){
      switch(it.type){
        case 'tweet': return <Tweet fb={it} />;
        case 'meme': return  <Meme fb={it} />;
        case 'article': return  <News fb={it} />;
      };
    }
    return <div className='w-full p-2 m-2 flex flex-col justify-center items-center '>
      {constructElement( feedback[0] )}
      {constructElement( feedback[1] )}
      {constructElement( feedback[2] )}
    </div>
  }

  // Game mode selection
  switch(view){
    // Intro screens
    case 'start': return <Splash onClick={() => { setView('introduction') }}/>;
    case 'introduction': return <Introduction onClick={() => { setView('event') }}/>;

    // Event screens
    case 'event': return <EventScreen 
      event = {event}
      onClickResponse = {processPlayerChoice}
      onClickExtraInfo = {() => { setView('eventExtra') }}
    />;
    case 'eventExtra': return <EventExtra 
      event = {event}
      onClick = {() => { setView('event') }}
    />;

    // Feedback screens
    case 'feedback1': return <FeedbackScreen1 
      response={ response() }
      feedback={ socialFeedback( response().socialMediaResponse ) }
      onClick={() => {  setView('feedback2') }} 
    />;
    case 'feedback2': return <FeedbackScreen2 
      response = { response() }
      indicatorsLastTurn={ lastMonth() } 
      onClickContinue = {nextTurn}
      onClickExtra = {() => { setView('feedbackExtra') }}
    />;
    case 'feedbackExtra': return <FeedbackExtra 
      response={ response() } 
      onClick={() => { setView('feedback2') }} 
    />;

    // End screen
    case 'end': return <Ending leaderStyle={endings[ending]} onClick={() => { setView('allEndings') }}/>;
    case 'allEndings': return <AllEndings onClick={(name: string) => { setEnding(name); setView('viewEnding') }} />; 
    case 'viewEnding': return <ViewEnding leaderStyle={endings[ending]} onClick={() => { setView('allEndings') }} />;
  }

}

export default App;
