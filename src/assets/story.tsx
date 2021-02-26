import { Event } from '../model/Event';
import {Title} from '../components/text';
import {Response} from '../model/Response';
import {GenghisCannot} from '../components/leaderStyles';

// Responses
export const resp1: Response = {
    id: 'resp1',
    label: 'response 1',
    getParentEvent: () => {return test1},
    updatedIndicators: {
        supportForLastResponse: 40,
        oppositionToLastResponse: 30,
        newCases: 1000,
        lockdownCosts: 1000,
        medicalCosts: 1000,
    },
    socialMediaResponse: <Title value='socialMediaResponses1' />,
    getNextEvent: () => {return test2},
    ending: ''
};
export const resp2: Response = {
    id: 'resp2',
    label: 'response 2',
    getParentEvent: () => {return test1},
    updatedIndicators: {
        supportForLastResponse: 30,
        oppositionToLastResponse: 40,
        newCases: 2000,
        lockdownCosts: 2000,
        medicalCosts: 2000,
    },
    socialMediaResponse:  <Title value='socialMediaResponses2' />,
    getNextEvent: () => {return test2},
    ending: ''
};
export const resp3: Response = {
    id: 'resp3',
    label: 'response 3',
    getParentEvent: () => {return test2},
    updatedIndicators: {
        supportForLastResponse: 40,
        oppositionToLastResponse: 30,
        newCases: 1000,
        lockdownCosts: 1000,
        medicalCosts: 1000,
    },
    socialMediaResponse: <Title value='socialMediaResponses3' />,
    getNextEvent: () => {return ending},
    ending: 'GenghisCannot'
};
export const resp4: Response = {
    id: 'resp4',
    label: 'response 4',
    getParentEvent: () => {return test2},
    updatedIndicators: {
        supportForLastResponse: 30,
        oppositionToLastResponse: 40,
        newCases: 2000,
        lockdownCosts: 2000,
        medicalCosts: 2000,
    },
    socialMediaResponse:  <Title value='socialMediaResponses4' />,
    getNextEvent: () => {return ending},
    ending: 'GenghisCannot'
};

// Story events
export const test1: Event = {
    id: 'event1',
    title: 'event1',
    description: 'testdescriptionofevent',
    extraDetails: {
        public: 'i think',
        business: 'therefore',
        medical: 'i am',
    },
    response1: resp1,
    response2: resp2
};
export const test2: Event = {
    id: 'event2',
    title: 'event2',
    description: 'testdescriptionofevent2',
    extraDetails: {
        public: 'i think',
        business: 'therefore',
        medical: 'i am',
    },
    response1: resp3,
    response2: resp4
};

// Blank event returned on ending to silence errors
export const ending: Event = { id: '', title: '', description: '', extraDetails: {public: '',business: '',medical: '',},response1: resp1,response2: resp2}
