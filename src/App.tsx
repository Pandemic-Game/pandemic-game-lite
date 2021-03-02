import { useState } from 'react';
import './App.css';
import "tailwindcss/tailwind.css";
import cloneDeep from 'lodash/cloneDeep';
import { Event, SourceDetails } from './model/Event';
import { Response, ResponseItem } from './model/Response';
import { Indicators } from './model/Indicators';
import {UK} from './model/Scenario';
import * as Story from './assets/events';
import * as LeaderStyle from './components/leaderStyles';
import {Tweet, News, Meme} from './components/socialFeedback';
import {Splash, Introduction} from './components/views/start';
import {SourceScreen} from './components/views/source';
import {EventScreen, EventExtra} from './components/views/event';
import {FeedbackScreen1, FeedbackScreen2, FeedbackExtra} from './components/views/feedback';
import {Ending, AllEndings, ViewEnding} from './components/views/end';

// Load story
const firstEvent = Story.evt_0_0;

/**
 * Main game loop
*/

const App = () => {

  const [history, setHistory] = useState<Response[]>([]);
  const [event, setEvent] = useState<Event>(firstEvent); // Load first event
  const [view, setView] = useState<string>('start');
  const [previousView, setPreviousView] = useState<string>('start');
  const [ending, setEnding] = useState<string>('');
  const [sourceToView, setSourceToView] = useState<SourceDetails>({sourceName: '', link: '', description: ''});
  
  const initialScenario: Indicators = { // Load initial scenario
    supportForLastResponse: UK.initialPublicSupport,
    oppositionToLastResponse: 100-UK.initialPublicSupport,
    newCases: Math.round( UK.initialNumInfected / UK.totalPopulation * 30 * 1000 ),
    lockdownCosts: UK.initialEconomicCosts,
    medicalCosts: UK.initialMedicalCosts
  }

  // Controls
  const show = (nextView: string) => {setPreviousView(view); setView(nextView);}
  const showSource = (src: SourceDetails) => { setSourceToView(src); show('sources') };

  const endings: Record<string, {ele: JSX.Element, bg: string}> = {
    'GenghisCannot': {ele: <LeaderStyle.GenghisCannot onClickSource={showSource} />, bg: 'yellow-500'},
    'FlipFlopper': {ele: <LeaderStyle.GenghisCannot  onClickSource={showSource} />, bg: 'red-500'},
    'CovidBane': {ele: <LeaderStyle.GenghisCannot  onClickSource={showSource} />, bg: 'green-500'},
    'EconomicSavior': {ele: <LeaderStyle.GenghisCannot  onClickSource={showSource} />, bg: 'blue-500'}
  };

  const getLastResponse = ():Response => cloneDeep( history[history.length - 1] );
  const getIndicatorsLastMonth = ():Indicators => history.length===1 ? initialScenario : cloneDeep( history[history.length - 2].updatedIndicators );

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
    show('feedback1'); 
  }

  // Show feedback
  const getSocialFeedback = (feedback:ResponseItem[]): JSX.Element => {
    function constructElement(it: ResponseItem, i: number){
      console.log(`animate__delay-${i}`)
      switch(it.type){
        case 'tweet': return <Tweet fb={it} animation={`animate__delay-${i}s	animate__animated animate__backInDown`} />;
        case 'meme': return  <Meme fb={it} animation={`animate__delay-${i}s	animate__animated animate__backInDown`} />;
        case 'article': return  <News fb={it} animation={`animate__delay-${i}s	animate__animated animate__backInDown`} />;
      };
    }
    return <div className='w-full p-2 m-2 flex flex-col justify-center items-center '>
      {constructElement( feedback[0], 1 )}
      {constructElement( feedback[1], 2 )}
      {constructElement( feedback[2], 3 )}
    </div>
  }

  // Game mode selection
  switch(view){
    // Intro screens
    case 'start': return <Splash onClick={() => { show('introduction') }}/>;
    case 'introduction': return <Introduction onClick={() => { show('event') }}/>;

    // Event screens
    case 'event': return <EventScreen 
      event = {event}
      onClickResponse = {processPlayerChoice}
      onClickExtraInfo = {() => show('eventExtra')}
    />;
    case 'eventExtra': return <EventExtra 
      event = {event}
      onClickSource = {showSource}
      onClickBack = {() => show('event')}
    />;

    // View sources show
    case 'sources': return <SourceScreen 
      sourceDetails={sourceToView} 
      onClick={() => {show( previousView )}} 
    />;

    // Feedback screens
    case 'feedback1': return <FeedbackScreen1 
      response={ getLastResponse() }
      feedback={ getSocialFeedback( getLastResponse().socialMediaResponse ) }
      onClick={() => show('feedback2')}
    />;
    case 'feedback2': return <FeedbackScreen2 
      response = { getLastResponse() }
      indicatorsLastTurn={ getIndicatorsLastMonth() } 
      onClickContinue = { () => ending ? show('end') : show('event') }
      onClickExtra = {() => show('feedbackExtra')}
    />;
    case 'feedbackExtra': return <FeedbackExtra 
      response={ getLastResponse() } 
      onClickBack={() => show('feedback2')} 
      onClickSource={showSource}
    />;

    // End show
    case 'end': return <Ending 
      leaderStyle={endings[ending]} 
      onClick={() => { show('allEndings') }}
    />;
    case 'allEndings': return <AllEndings 
      onClick={(name: string) => { setEnding(name); show('viewEnding') }} 
    />; 
    case 'viewEnding': return <ViewEnding 
      leaderStyle={endings[ending]} 
      onClick={() => { show('allEndings') }} 
    />;
  }

}

export default App;
