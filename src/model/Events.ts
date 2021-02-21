import { GameState } from './GameState';
import { Response } from './Response';

export interface Event {
    id: string;
    eventMainComponent: (onResponseSelected: (response: Response) => void) => JSX.Element;
    // eventDetailComponent: (gameController: GameController) => Component<any> | FC<any>;
    canRun: (gameState: GameState) => boolean;
    responses: Response[];
}