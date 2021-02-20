import { Component, FC } from 'react';
import { PlayerActions } from '../simulator/SimulatorModel';
import { GameState, Indicators } from './GameState';

export interface Response {
    id: string;
    eventId: string;
    name: string;
    isApplicable: (gameState: GameState) => boolean;
    onSelect: (gameState: GameState) => ResponseSelectionResult;
}

export interface Feedback {
    responseSocialMediaComponent: Component<any> | FC<any>,
    responseDataComponent: Component<any> | FC<any>,
    responseDataDeepDiveComponent: Component<any> | FC<any>,
}

export interface ResponseSelectionResult {
    updatedIndicators: Indicators;
    feedback: Feedback;
    playerActions: PlayerActions;
}
