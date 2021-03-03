import { Response } from './Response';

export interface SourceDetails {
    sourceName: string,
    link: string,
    description: string
}

export interface ExtraDetail {
    speech: string;
    sourceDetails: SourceDetails;
}

export interface Event {
    title: string;
    description: string;
    extraDetails: {
        public: ExtraDetail
        business: ExtraDetail;
        medical: ExtraDetail;
    },
    response1: Response;
    response2: Response;
}