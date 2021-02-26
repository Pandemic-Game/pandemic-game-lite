import { useState } from 'react';
import './App.css';
import "tailwindcss/tailwind.css";

import { Event } from './model/Event';
import { Response, History } from './model/Response';
import { Indicators } from './model/Indicators';
import {UK} from './model/Scenario';
import * as Story from './assets/story';

// Components
import {Splash, Introduction} from './components/views/start';
import {EventScreen, EventExtra} from './components/views/event';
import {FeedbackScreen1, FeedbackScreen2, FeedbackExtra} from './components/views/feedback';
import {Ending, AllEndings, ViewEnding} from './components/views/end';
import * as LeaderStyle from './components/leaderStyles';

/**
 * Main game loop
*/

const App = () => {

  const [indicators, setIndicators] = useState<Indicators>({ // Load initial scenario
    supportForLastResponse: UK.initialPublicSupport,
    oppositionToLastResponse: 100-UK.initialPublicSupport,
    newCases: UK.initialNumInfected,
    lockdownCosts: UK.initialEconomicCosts,
    medicalCosts: UK.initialMedicalCosts
  });
  const [event, setEvent] = useState<Event>(Story.test1); // Load first event
  const [response, setResponse] = useState<Response>(Story.test1.response1); // Silences TS shouting at me
  const [history, setHistory] = useState<History[]>([]);
  const [view, setView] = useState('start');
  const [ending, setEnding] = useState<string>('');
  
  const endings: Record<string, {ele: JSX.Element, bg: string}> = {
    'GenghisCannot': {ele: <LeaderStyle.GenghisCannot />, bg: 'yellow-500'},
    'FlipFlopper': {ele: <LeaderStyle.GenghisCannot />, bg: 'red-500'},
    'CovidBane': {ele: <LeaderStyle.GenghisCannot />, bg: 'green-500'},
    'EconomicSavior': {ele: <LeaderStyle.GenghisCannot />, bg: 'blue-500'}
  };

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {

    // Update gamestate
    setResponse(playerChoice);
    setIndicators(playerChoice.updatedIndicators);
    
    // Show new event or if at end show ending
    if (playerChoice.ending) {
      setEnding(playerChoice.ending)
    } else {
      setEvent(playerChoice.getNextEvent())
    }

    // TO-DO: add history

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
    case 'feedback1': return <FeedbackScreen1 response={response} onClick={() => {  setView('feedback2') }} />;
    case 'feedback2': return <FeedbackScreen2 
      response = {response}
      onClickContinue = {nextTurn}
      onClickExtra = {() => { setView('feedbackExtra') }}
    />;
    case 'feedbackExtra': return <FeedbackExtra response={response} onClick={() => { setView('feedback2') }} />;

    // End screen
    case 'end': return <Ending leaderStyle={endings[ending]} onClick={() => { setView('allEndings') }}/>;
    case 'allEndings': return <AllEndings onClick={(name: string) => { setEnding(name); setView('viewEnding') }} />; 
    case 'viewEnding': return <ViewEnding leaderStyle={endings[ending]} onClick={() => { setView('allEndings') }} />;
  }

}

export default App;
