import { Response } from './Response';

export interface Event {
    id: string;
    title: string;
    description: string;
    extraDetails: {
        public: string;
        business: string;
        medical: string;
    },
    response1: Response;
    response2: Response;
}