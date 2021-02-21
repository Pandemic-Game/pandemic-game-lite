import { useState } from 'react';
import './App.css';
import { GameController, isGameState } from './controller/GameController';
import { Event } from './model/Events';
import { GameState, ResponseHistory } from './model/GameState';
import { Response, ResponseSelectionResult } from './model/Response';
import { TestEvent } from './narrative/TwoChoiceNarrative';
import { US } from './scenarios/US';

/**
 * Displays a new event
 */
interface DisplayNextEventProps {
  event: Event,
  onPlayerChoice: (response: Response) => void
}

const DisplayNextEvent: React.FC<DisplayNextEventProps> = (props: DisplayNextEventProps) => {
  const { event, onPlayerChoice } = props
  return (<div>{event.eventMainComponent(onPlayerChoice)}</div>)
}

/**
 * Displays the outcomes of a player choice
 */
interface DisplayResponseProps {
  eventResponse: ResponseSelectionResult,
  onDismiss: () => void
}

const DisplayResponseOutcomes: React.FC<DisplayResponseProps> = (props: DisplayResponseProps) => {
  const { eventResponse, onDismiss } = props
  //TODO: add interactions to navigate on the detail of the response
  return (<div>
    {eventResponse.feedback.responseSocialMediaComponent(onDismiss)}
  </div>)
}

/**
 * End game screed
 */
interface GameEndProps { gameState: GameState }

const DisplayEndGame: React.FC<GameEndProps> = (props: GameEndProps) => {
  //TODO: we should make this easier, but for now it works
  const lastEntry: ResponseHistory = props.gameState.responseHistory[props.gameState.responseHistory.length - 1];
  const reputation = lastEntry.responses[0].result.reputations[0];

  return (<div>
    <h1>Your game has ended. You are:</h1>
    {reputation.reputationComponent()}
  </div>)
}

/**
 * Main game loop
 */
const GameModes = {
  NextEvent: "NextEvent",
  DisplayResponseOutcomes: "DisplayResponseOutcomes",
  GameEnd: "GameEnd",
}

const narrative = [TestEvent]
const gameController = new GameController(US, narrative);
const firstEvent = gameController.nextTurn()
const App = () => {

  const [nextEvent, setNextEvent] = useState(firstEvent)
  const [currentResponse, setCurrentResponse] = useState<ResponseSelectionResult | undefined>(undefined)
  const [currentMode, setCurrentMode] = useState(GameModes.NextEvent)

  // Applies the response and advances to the next turn
  const processPlayerChoice = (response: Response) => {
    const nextResponse = gameController.respondToEvent(response.id)
    setCurrentResponse(nextResponse);
    setNextEvent(gameController.nextTurn())
    setCurrentMode(GameModes.DisplayResponseOutcomes)
  }

  // Controls the game loop after the outcomes of a response have been processed.
  const showNextEvent = () => {
    if (isGameState(nextEvent)) {
      setCurrentMode(GameModes.GameEnd)
    } else {
      setCurrentMode(GameModes.NextEvent)
    }
  }

  // Game mode slection
  if (currentMode === GameModes.GameEnd) {
    if (isGameState(nextEvent)) {
      return <DisplayEndGame gameState={nextEvent} />
    } else {
      throw new Error("Game has ended but game state is not set")
    }

  } else if (currentMode === GameModes.NextEvent) {
    if (!isGameState(nextEvent)) {
      return <DisplayNextEvent
        onPlayerChoice={processPlayerChoice}
        event={nextEvent} />;
    } else {
      throw new Error("Game has not ended but received end result")
    }
  } else {
    if (currentResponse) {
      return <DisplayResponseOutcomes
        onDismiss={() => { showNextEvent() }}
        eventResponse={currentResponse} />;
    } else {
      throw new Error("Expecting a response. None received")
    }
  }
}

export default App;
