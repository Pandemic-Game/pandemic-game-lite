import { Event } from '../model/Event';
import {Response} from '../model/Response';
import ExampleMeme from '../assets/GIF/meme-example.gif'

// Responses
export const resp1: Response = {
    label: 'response 1',
    getParentEvent: () => {return test1},
    updatedIndicators: {
        supportForLastResponse: 40,
        oppositionToLastResponse: 30,
        newCases: 20,
        lockdownCosts: 1000,
        medicalCosts: 1000,
    },
    socialMediaResponse: [
        {
            type: 'tweet',
            isHappy: true,
            head: 'example person',
            content: 'example tweet'
        },
        {
            type: 'meme',
            isHappy: true,
            head: 'example head meme',
            content: ExampleMeme
        },
        {
            type: 'article',
            isHappy: true,
            head: 'example head',
            content: 'EXMAPLE OF A HEADLINE: BREAKING'
        }
    ],
    getNextEvent: () => {return test2},
    ending: '',
    sourceDetails: {
        sourceName: 'XXX',
        link: 'XXX',
        description: 'XXX'
    }
};
export const resp2: Response = {
    label: 'response 2',
    getParentEvent: () => {return test1},
    updatedIndicators: {
        supportForLastResponse: 30,
        oppositionToLastResponse: 40,
        newCases: 30,
        lockdownCosts: 2000,
        medicalCosts: 2000,
    },
    socialMediaResponse:  [
        {
            type: 'tweet',
            isHappy: true,
            head: 'example person',
            content: 'example tweet'
        },
        {
            type: 'meme',
            isHappy: true,
            head: 'example head meme',
            content: 'example meme'
        },
        {
            type: 'article',
            isHappy: true,
            head: 'example head',
            content: 'EXMAPLE OF A HEADLINE: BREAKING'
        }
    ],
    getNextEvent: () => {return test2},
    ending: '',
    sourceDetails: {
        sourceName: 'XXX',
        link: 'XXX',
        description: 'XXX'
    }
};
export const resp3: Response = {
    label: 'response 3',
    getParentEvent: () => {return test2},
    updatedIndicators: {
        supportForLastResponse: 40,
        oppositionToLastResponse: 30,
        newCases: 9,
        lockdownCosts: 1000,
        medicalCosts: 1000,
    },
    socialMediaResponse: [
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        },
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        },
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        }
    ],
    getNextEvent: () => {return ending},
    ending: 'GenghisCannot',
    sourceDetails: {
        sourceName: 'XXX',
        link: 'XXX',
        description: 'XXX'
    }
};
export const resp4: Response = {
    label: 'response 4',
    getParentEvent: () => {return test2},
    updatedIndicators: {
        supportForLastResponse: 30,
        oppositionToLastResponse: 40,
        newCases: 50,
        lockdownCosts: 2000,
        medicalCosts: 2000,
    },
    socialMediaResponse:  [
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        },
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        },
        {
            type: 'tweet',
            isHappy: true,
            head: 'example head',
            content: 'example content'
        }
    ],
    getNextEvent: () => {return ending},
    ending: 'GenghisCannot',
    sourceDetails: {
        sourceName: 'XXX',
        link: 'XXX',
        description: 'XXX'
    }
};

// Story events
export const test1: Event = {
    title: 'event1',
    description: 'testdescriptionofevent',
    extraDetails: {
        public: {
            speech: 'i think',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        },
        business:{
            speech: 'therefore',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        },
        medical:{
            speech: 'i am',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        }
    },
    response1: resp1,
    response2: resp2
};
export const test2: Event = {
    title: 'event2',
    description: 'testdescriptionofevent2',
    extraDetails: {
        public: {
            speech: 'i think',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        },
        business:{
            speech: 'therefore',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        },
        medical:{
            speech: 'i am',
            sourceDetails: {
                sourceName: 'string',
                link: 'string',
                description: 'string'
            },
        }
    },
    response1: resp3,
    response2: resp4
};

// Blank event returned on ending to silence errors
export const ending: Event = { 
    title: '', 
    description: '', 
    extraDetails: {
        public: {
            speech: '',
            sourceDetails: {
                sourceName: '',
                link: '',
                description: ''
            },
        },
        business:{
            speech: '',
            sourceDetails: {
                sourceName: '',
                link: '',
                description: ''
            },
        },
        medical:{
            speech: '',
            sourceDetails: {
                sourceName: '',
                link: '',
                description: ''
            },
        }
    },
    response1: resp1,
    response2: resp2
}
