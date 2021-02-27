import { Indicators } from './Indicators';
import {Event} from './Event'

export interface ResponseItem {
    type: 'tweet' | 'meme' | 'article',
    isHappy: boolean,
    head: string,
    content: string
}

export interface Response {
    id: string;
    label: string;
    getParentEvent: () => Event;
    updatedIndicators: Indicators;
    socialMediaResponse: ResponseItem[];
    getNextEvent: () => Event;
    ending: string;
}

export interface History {
    event: Event;
    response: Response;
    indicators: Indicators;
}