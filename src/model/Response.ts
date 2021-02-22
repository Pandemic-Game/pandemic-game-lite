import { Indicators } from './Indicators';
import {Event} from './Event'
import { Reputation } from './Reputation';

export interface Response {
    id: string;
    label: string;
    getParentEvent: () => Event;
    updatedIndicators: Indicators;
    socialMediaResponse: JSX.Element;
    getNextEvent: () => Event;
    ending: Reputation;
}

export interface History {
    event: Event;
    response: Response;
    indicators: Indicators;
}