import {Event} from '../model/Event';

/*
Developer note:
    response1 = a lockdown action
    response2 = a no-lockdown action
    &
    All social feedback is now social prediction ahead of decision making (and is carried on response1)
*/
const blankSpeech = {
    speech: '',
    sourceDetails: {
        sourceName: '',
        link: '',
        description: ''
    }
}
const no_extra_details = {
    public: blankSpeech,
    business: blankSpeech,
    medical: blankSpeech
}
const no_source = {
    sourceName: '',
    link: '',
    description: ''
}

export const evt_0_0: Event = {
    title: `Welcome to the jungle`,
    description: `2% of the population have caught COVID-19 this month and the number of new cases is rising. 
    You are being pressured to make a response to the situation by either enforcing restrictions or remaining open.

    (Tutorial: As a policy maker you are bombarded with information from the public and experts. Your choices may impact people's health and quality of life. On the next page we will show you what people are saying! You can toggle what we show you at any time using the controls in the top-right corner)`,
    extraDetails: no_extra_details,
    response2: { //response2 = no lockdown (for all events)
        label: `Keep everything open`,
        getParentEvent: () => {
            return evt_0_0
        },
        updatedIndicators: {
            supportForLastResponse: 11,
            oppositionToLastResponse: 85,
            newCases: 45,
            lockdownCosts: 1,
            medicalCosts: 40
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return evt_1_1
        },
        ending: '',
        sourceDetails: no_source
    },
    response1: { //response1 = lockdown (for all events)
        label: `Close non-essential businesses..`,
        getParentEvent: () => {
            return evt_0_0
        },
        updatedIndicators: {
            supportForLastResponse: 85,
            oppositionToLastResponse: 11,
            newCases: 4.5,
            lockdownCosts: 11,
            medicalCosts: 20
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: true,
            head: `Daily postbox`,
            content: `Many express hesitancy to new lockdown proposals  `
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Noah @arcDeTriumph`,
            content: `We don't need lockdown, we need Jesus`
        },{
            type: `article`,
            isHappy: false,
            head: `The Chronicle`,
            content: `Lockdown won't be taken seriously. NEW POLL indicates 3 in 4 people agree.`
        }, {
            type: `meme`,
            isHappy: true,
            head: `TFW I can actually see my friends`,
            content: `https://media.giphy.com/media/3o7TKCskhXtrq3nsBy/giphy.gif`
        },{
            type: `tweet`,
            isHappy: false,
            head: `YOU Weekly @YOUWeeklyOnline`,
            content: `NO END IN SIGHT: What are we gonna do, stay in lockdown forever? 71% of people agree pandemic won't end soon.`
        }],
        getNextEvent: () => {
            return evt_1_2
        },
        ending: '',
        sourceDetails: no_source
    }
};
export const evt_1_1: Event = {
    title: `2 KOOL 4 SKOOL`,
    description: `Exams are coming up. Opening up schools and universities would create a spike in cases. 
    However, continuing with distanced learning will interrupt exams and teaching...
    You are being pressured to make a decision whether to open schools back up or not.`,
    extraDetails: no_extra_details,
    response2: {
        label: `Re-open schools`,
        getParentEvent: () => {
            return evt_1_1
        },
        updatedIndicators: {
            supportForLastResponse: 23,
            oppositionToLastResponse: 67,
            newCases: 90,
            lockdownCosts: 1,
            medicalCosts: 104
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return evt_2_1
        },
        ending: '',
        sourceDetails: no_source
    },
    response1: {
        label: `Keep schools closed`,
        getParentEvent: () => {
            return evt_2_2
        },
        updatedIndicators: {
            supportForLastResponse: 67,
            oppositionToLastResponse: 23,
            newCases: 80,
            lockdownCosts: 11,
            medicalCosts: 94
        },
        socialMediaResponse: [{
            type: `tweet`,
            isHappy: true,
            head: `Karen @AllBoutThatGlitter`,
            content: `The kids might go back to school!?!?! #HelloFreedom #Winning`
        },{
            type: `article`,
            isHappy: false,
            head: `The Daily Planet`,
            content: `"I wasn't trained for this": Teachers struggle with online learning switch`
        },{
            type: `article`,
            isHappy: false,
            head: `Universal News`,
            content: `Lockdown would deprive students of formative social experiences`
        },{
            type: `meme`,
            isHappy: false,
            head: `sleeping through zoom lectures like`,
            content: `https://media.giphy.com/media/26FxCOdhlvEQXbeH6/giphy.gif`
        }],
        getNextEvent: () => {
            return evt_2_2
        },
        ending: '',
        sourceDetails: no_source
    }
};
export const evt_1_2: Event = {
    title: `Cabin Fever`,
    description: `People are itching to get back to their normal lives. For some, it's becoming a need. 
    Many have lost their jobs and others, particularly young people, are ignoring the restrictions anyway.
    People are asking you to lift lockdown.`,
    extraDetails: no_extra_details,
    response2: {
        label: `Let people outside again`,
        getParentEvent: () => {
            return evt_1_2
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 14,
            lockdownCosts: 1,
            medicalCosts: 3
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return evt_2_2
        },
        ending: '',
        sourceDetails: no_source
    },
    response1: {
        label: `Re-enforce stay at home order`,
        getParentEvent: () => {
            return evt_1_2
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 1,
            lockdownCosts: 11,
            medicalCosts: 5
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `The Postbox`,
            content: `END LOCKDOWN NOW RIOTS: Thousands descend to protest lockdown`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Eugene H. Krabs @TheKrustyKrab`,
            content: `Me restaurant hasn't had any customers in months. LIFT RESTRICTIONS NOW!!!`
        },{
            type: `meme`,
            isHappy: true,
            head: `Me: "We live in a free country, let us free!" The government:`,
            content: `https://media.giphy.com/media/iqfYgtx8oWw4o/giphy.gif`
        },{
            type: `article`,
            isHappy: false,
            head: `Daily Bugle`,
            content: `People value their wellbeing and lockdown threatens it. 84% of people agree that wellbeing is just as important as physical health`
        },{
            type: `article`,
            isHappy: false,
            head: `Ardent Magazine`,
            content: `TOP 10 TRIPS to escape the doom and gloom of lockdown (even if they're not strictly legal YET)`
        }],
        getNextEvent: () => {
            return evt_2_3
        },
        ending: '',
        sourceDetails: no_source
    }
};
export const evt_2_1: Event = {
    title: `But at what cost?`,
    description: `Experts are recommending much stronger restrictions, immediately. 
    Doctors, epidemiologists, economists, and even your dentist are telling you to get those case numbers down. 
    This is a tough choice. 
    While the rest of the world has reduced their infection rate via careful restrictions, your people have at least enjoyed something resembling a normal lifestyle.`,
    extraDetails: no_extra_details,
    response2: {
        label: `Maintain freedom`,
        getParentEvent: () => {
            return evt_2_1
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 90,
            lockdownCosts: 1,
            medicalCosts: 104
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: no_source
    },
    response1: {
        label: `Go into lockdown`,
        getParentEvent: () => {
            return evt_2_1
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 15,
            lockdownCosts: 11,
            medicalCosts: 61
        },
        socialMediaResponse: [{
            type: `meme`,
            isHappy: false,
            head: `The only thing you're restricting is freedom`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/846/426/fc0.gif`
        },{
            type: `article`,
            isHappy: false,
            head: `The Quarterly Prophet`,
            content: `People self-isolate when they are worried about coronavirus`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Lynyrd Skynyrd @FreeBird72`,
            content: `https://media1.giphy.com/media/6901DbEbbm4o0/giphy.gif`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Haf @ElderManTalks`,
            content: `Compared to other countries we are free. We look happy. Why would we want to go back into a lockdown?`
        },{
            type: `article`,
            isHappy: false,
            head: `Pragmatic Economics Weekly`,
            content: `Economy continues to thrive as country remains open`
        },{
            type: `article`,
            isHappy: false,
            head: `The New Fork Times`,
            content: `People are feeling fulfilled: Country ranks best for social satisfaction.`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: no_source
    }
};
export const evt_2_2: Event = {
    title: `Bad Moon Rising`,
    description: `The number of COVID-19 cases has reached an all-time high. 
    Hospitals are filling up quickly. The media is flooded with climbing case numbers. 
    You need to make a decision now whether to reverse your decision and implement a lockdown.`,
    extraDetails: no_extra_details,
    response2: {
        label: `Stand by your decision`,
        getParentEvent: () => {
            return evt_2_2
        },
        updatedIndicators: {
            supportForLastResponse: 26,
            oppositionToLastResponse: 60,
            newCases: 90,
            lockdownCosts: 1,
            medicalCosts: 39
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: no_source
    },
    response1: {
        label: `Change your mind: Lockdown!`,
        getParentEvent: () => {
            return evt_2_2
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 3.6,
            lockdownCosts: 11,
            medicalCosts: 15
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `The Daily Planet`,
            content: `Inconsistent response to pandemic will cause mass confusion`
        }, {
            type: `article`,
            isHappy: false,
            head: `The Informant`,
            content: `Businesses would struggle to adapt to constantly changing rules`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Hickory @TheClock`,
            content: `The government should choose to END lockdown and STICK to it.`
        },{
            type: `meme`,
            isHappy: true,
            head: `us vs covid restrictions`,
            content: `https://media.giphy.com/media/1BQdjXovIqSLS/giphy.gif`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: no_source
    }
};
export const evt_2_3: Event = {
    title: `Where Is My Mind?`,
    description: `People are struggling. 
    Citizens feel they have to break restrictions to meet their needs and are asking for relaxed restrictions.
    However, the end is in sight, maybe another round of restrictions would end COVID-19 for good?`,
    extraDetails: no_extra_details,
    response2: {
        label: `Relax social restrictions`,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 84,
            oppositionToLastResponse: 12,
            newCases: 1,
            lockdownCosts: 5.5,
            medicalCosts: 0.5
        },
        socialMediaResponse: [],
        getNextEvent: () => {
            return ending
        },
        ending: `BusinessGuru`,
        sourceDetails: no_source
    },
    response1: {
        label: `Continue all restrictions`,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 0,
            lockdownCosts: 11,
            medicalCosts: 0
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: true,
            head: `The Nightly Mail`,
            content: `Country set to experience mental health crisis. Depression up by 50% and may continue to rise.`
        },{
            type: `article`,
            isHappy: false,
            head: `The Blues News`,
            content: `Two thirds of people believe wellbeing is just as important as physical health.`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Your Yoga Instructor @ZenToTheMax`,
            content: `Mental health first!! #PowerToThePeople`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Me when I go outside for the first time in 525,600 days`,
            content: `https://thumbs.gfycat.com/DeliriousDenseArgali-small.gif`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: `CovidTerminator`,
        sourceDetails: no_source
    }
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
    response1: {
        label: ``,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 0,
            oppositionToLastResponse: 0,
            newCases: 0,
            lockdownCosts: 0,
            medicalCosts: 0
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: true,
            head: ``,
            content: ``
        }, {
            type: `article`,
            isHappy: true,
            head: ``,
            content: ``
        }, {
            type: `tweet`,
            isHappy: false,
            head: ` `,
            content: ``
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: ``,
            link: ``,
            description: ``
        }
    },
    response2: {
        label: ``,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 0,
            oppositionToLastResponse: 0,
            newCases: 0,
            lockdownCosts: 0,
            medicalCosts: 0
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: true,
            head: ` `,
            content: ``
        }, {
            type: `article`,
            isHappy: true,
            head: ``,
            content: ``
        }, {
            type: `tweet`,
            isHappy: false,
            head: ` `,
            content: ``
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: ``,
            link: ``,
            description: ``
        }
    }
}
