import { Indicators } from './Indicators';
import {Event} from './Event'

export interface Response {
    id: string;
    label: string;
    getParentEvent: () => Event;
    updatedIndicators: Indicators;
    socialMediaResponse: JSX.Element;
    getNextEvent: () => Event;
    ending: string;
}

export interface History {
    event: Event;
    response: Response;
    indicators: Indicators;
}