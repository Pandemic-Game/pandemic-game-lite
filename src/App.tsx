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
import {Introduction} from './components/views/start';
import {EventScreen} from './components/views/event';
import {FeedbackScreen} from './components/views/feedback';

function EndScreen(props: any){
  return <div>{props.ending.id}</div>
}

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
  const [response, setResponse] = useState<Response>(narrative[0].response1); // Silences TS shouting at me
  const [history, setHistory] = useState<History[]>([]);
  const [view, setView] = useState('start');
  const [ending, setEnding] = useState<Reputation>();

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
    setView('feedback'); 
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
    case 'start': return <Introduction onClick={() => {setView('event')}}/>;
    case 'event': return <EventScreen event={event} onClick = {processPlayerChoice} />;
    case 'feedback': return <FeedbackScreen response={response} onClick={nextTurn} />;
    case 'end': return <EndScreen ending={ending} />; // Reputations are end events
  }

}

export default App;
