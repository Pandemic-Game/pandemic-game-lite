import { Component, FC } from 'react';
import { PlayerActions } from '../simulator/SimulatorModel';
import { GameState, Indicators, Reputation } from './GameState';

export interface Response {
    id: string;
    eventId: string;
    isApplicable: (gameState: GameState) => boolean;
    onSelect: (gameState: GameState) => ResponseSelectionResult;
}

export interface Feedback {
    responseSocialMediaComponent: (onDismiss: () => void) => JSX.Element
}

export interface ResponseSelectionResult {
    updatedIndicators: Indicators;
    feedback: Feedback;
    reputations: Reputation[];
    playerActions: PlayerActions;
}
