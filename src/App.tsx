import { useState } from 'react';
import './App.css';
import "tailwindcss/tailwind.css";

import { Event } from './model/Event';
import { Response, History } from './model/Response';
import { Reputation } from './model/Reputation';
import { Indicators } from './model/Indicators';
import {UK} from './model/Scenario';
import * as Story from './assets/story';

// Components
import {Splash, Introduction} from './components/views/start';
import {EventScreen, EventExtra} from './components/views/event';
import {FeedbackScreen1, FeedbackScreen2, FeedbackExtra} from './components/views/feedback';
import {YourLeadershipStyle, AllLeadershipStyles, ViewLeadershipStyle} from './components/views/end';

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
  const [ending, setEnding] = useState<Reputation>(Story.notAtEnd);

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {

    // Update gamestate
    setResponse(playerChoice);
    setIndicators(playerChoice.updatedIndicators);
    
    // Show new event or if at end show ending
    if (playerChoice.ending === Story.notAtEnd) {
      setEvent(playerChoice.getNextEvent())
    } else {
      setEnding(playerChoice.ending)
    }

    // TO-DO: add history

    // Show feedback for choice
    setView('feedback1'); 
  }

  // Show new event
  const nextTurn = () => {
    if(ending){
      setView('yourLeadershipStyle');
    } else {
      setView('feedback1');
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
    case 'yourLeadershipStyle': return <YourLeadershipStyle ending={ending} onClick={() => { setView('yourLeadershipStyle') }} />;
    case 'allLeadershipStyles': return <AllLeadershipStyles 
      onClick={(selectedLeadershipStyle: Reputation) => { setEnding(selectedLeadershipStyle); setView('viewLeadershipStyle') }} 
    />; 
    case 'viewLeadershipStyle': return <ViewLeadershipStyle reputation={ending} onClick={() => { setView('allLeadershipStyles') }} />; // Reputations are end events
  }

}

export default App;
