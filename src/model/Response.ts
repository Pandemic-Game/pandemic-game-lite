import { Indicators } from './Indicators';
import {Event, SourceDetails} from './Event'

export interface ResponseItem {
    type: 'tweet' | 'meme' | 'article',
    isHappy: boolean,
    head: string,
    content: string
}

export interface Response {
    label: string;
    getParentEvent: () => Event;
    updatedIndicators: Indicators;
    socialMediaResponse: ResponseItem[];
    getNextEvent: () => Event;
    ending: string;
    sourceDetails: SourceDetails;
}

export interface History {
    turn: number;
    event: Event;
    response: Response;
}