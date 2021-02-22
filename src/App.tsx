import { useState } from 'react';
import './App.css';
import { Event } from './model/Event';
import { Response, History } from './model/Response';
import { Reputation } from './model/Reputation';
import { Indicators } from './model/Indicators';
import {UK} from './controller/Scenario';
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

const scenario = UK;
const narrative: Event[] = [Story.test1];

const App = () => {

  const [turn, setTurn] = useState<number>(0);
  const [indicators, setIndicators] = useState<Indicators>({ // Load initial scenario
    supportForLastResponse: scenario.initialPublicSupport,
    oppositionToLastResponse: 100-scenario.initialPublicSupport,
    newCases: scenario.initialNumInfected,
    lockdownCosts: scenario.initialEconomicCosts,
    medicalCosts: scenario.initialMedicalCosts
  });
  const [event, setEvent] = useState<Event>(narrative[0]); // Load first event
  const [response, setResponse] = useState<Response>(narrative[0].response1); // Silence warning with placeholder
  const [history, setHistory] = useState<History[]>([]);
  const [view, setView] = useState('start');
  const [ending, setEnding] = useState<Reputation>();

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {
    setTurn(turn+1);
    setResponse(playerChoice);
    setIndicators(response.updatedIndicators);
    
    // Show new event or if at end show ending
    if (response.ending) {
      setEnding(response.ending)
    } else {
      setEvent(response.getNextEvent())
    }

    // TO-DO: add history

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
    case 'start': return <Introduction onContinue={() => {setView('event')}}/>;
    case 'event': return <EventScreen event={event} onClick = {processPlayerChoice} />;
    case 'feedback': return <FeedbackScreen response={response} onClick={nextTurn} />;
    case 'end': return <EndScreen ending={ending} />; // Reputations are end events
  }

}

export default App;
