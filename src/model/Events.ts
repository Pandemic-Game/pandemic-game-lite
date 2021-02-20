import { GameState, Reputation } from './GameState';
import { Response } from './Response';
import { Component, FC } from 'react';

export interface Event {
    id: string;
    name: string;
    description: string;
    eventMainComponent: Component<any> | FC<any>;
    eventDetailComponent: Component<any> | FC<any>;
    canRun: (gameState: GameState) => boolean;
    responses: Response[];
}

export interface CompletedEvent {
    event: Event;
    response: Response;
    playerChoiceId: string; // id of the response the player chose
    reputation: Reputation[];
}
