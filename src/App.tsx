import './App.css';
import { GameController } from './controller/GameController';
import { TestEvent } from './narrative/test';
import { US } from './scenarios/US';

const narrative = [TestEvent]
const gameController = new GameController(US, narrative);


const App = () => {
  return (<div></div>);
}

export default App;
