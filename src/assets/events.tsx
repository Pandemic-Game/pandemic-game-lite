import {Event} from '../model/Event';

export const evt_0_0: Event = {
    title: `Welcome to the jungle`,
    description: `24 in 1000 people have caught COVID-19 this month and the number of new cases is rising. 
    You are being pressured to make a response to the situation by either enforcing restrictions or remaining open.`,
    extraDetails: {
        public: {
            speech: `If make restrictions people will probably stop obeying them after a while.`,
            sourceDetails: {
                sourceName: `YouGov `,
                link: `https://docs.cdn.yougov.com/pkv90of78k/SunOnSunday_CoronaResults_210115.pdf`,
                description: `76% of UK respondents think others complied less with the second (Winter 2020) lockdowns compared with the first (Spring 2019) lockdowns.`
            }
        },
        business: {
            speech: `Closing businesses is not sustainable in the long-term, and will displace a lot of workers in the short-term.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: `26% of people want businesses to stay open and a lockdown will hurt business for a month or so`
            }
        },
        medical: {
            speech: `New variants are starting to appear. They are highly contagious and have the potential to spread rapidly.`,
            sourceDetails: {
                sourceName: `CDC`,
                link: `https://www.cdc.gov/coronavirus/2019-ncov/transmission/variant.html`,
                description: `Multiple variants of the virus that causes COVID-19 have been documented globally, some variants are more infectious than others.`
            }
        }
    },
    response1: {
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `Daily Bugle`,
            content: `New cases rising sharply`
        }, {
            type: `meme`,
            isHappy: true,
            head: `TFW I can actually see my friends`,
            content: `https://media.giphy.com/media/3o7TKCskhXtrq3nsBy/giphy.gif`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Chan Chan Man @ChanandalerBong`,
            content: `Could the COVID cases BE any higher???`
        }],
        getNextEvent: () => {
            return evt_1_1
        },
        ending: '',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `85% of UK respondents say that they support the implementation of a second lockdown in early 2021 for the UK.`
        }
    },
    response2: {
        label: `Let's close non-essential businesses..`,
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
            head: `Very Legit Medical Journal`,
            content: `Lockdown gives nurses much-needed reprieve as cases drop`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Derek Shepard @McDreamface`,
            content: `Anything to save lives 💗`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Me when I see someone sneeze`,
            content: `https://media.giphy.com/media/gGaEm6jMNs98JuWiPv/giphy-downsized.gif`
        }],
        getNextEvent: () => {
            return evt_1_2
        },
        ending: '',
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
          description: `85% of UK respondents say that they support the implementation of a second lockdown in early 2021 for the UK.`
        }
    }
};
export const evt_1_1: Event = {
    title: `2 KOOL 4 SKOOL`,
    description: `Exams are coming up. Keeping schools and universities open would create a spike in cases. 
    However, continuing with distance learning will interrupt exams and teaching...`,
    extraDetails: {
        public: {
            speech: `Homeschooling will be difficult but schools aren't safe right now...`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `Lots of businesses rely on students for customers and others rely on qualified and trained employees!`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `Opening schools and universities is one of the fastest ways to increase cases.`,
            sourceDetails: {
                sourceName: `EpidemicForecasting`,
                link: `http://epidemicforecasting.org`,
                description: `Closing schools and universities is estimated to reduce R by as much as 33%, whereas limiting gatherings to 10 people is estimated around 24%.`
            }
        }
    },
    response1: {
        label: `Keep schools open`,
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `New Fork Times`,
            content: `Health Secretary: 'Be prepared for a rise in cases'`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Kevin @KoolKevin22`,
            content: `My kids CANNOT be expected to wear a mask all day. This is RIDICULOUS.`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Kared @AllBoutThatGlitter`,
            content: `The kids are back in school!!! #HelloFreedom #Winning`
        }],
        getNextEvent: () => {
            return evt_2_1
        },
        ending: '',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://docs.cdn.yougov.com/42ib2mxynp/Globalism%20-%20lockdown%20measures.pdf`,
            description: `67% of UK respondents in early 2021 support closing schools and universities. However, this alone is not enough to completely stop cases.`
        }
    },
    response2: {
        label: `Close schools`,
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
            type: `article`,
            isHappy: true,
            head: `The French Press`,
            content: `Health Secretary: 'This was the only logical course of action'`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Ferris the Great @BuellerBueller`,
            content: `Every day is a day off 🙌`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Hermione @BooksAndCleverness`,
            content: `ALL THAT STUDYING FOR NOTHING 😭😭`
        }],
        getNextEvent: () => {
            return evt_2_2
        },
        ending: '',
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://docs.cdn.yougov.com/42ib2mxynp/Globalism%20-%20lockdown%20measures.pdf`,
          description: `67% of UK respondents in early 2021 support closing schools and universities. However, this alone is not enough to completely stop cases.`
        }
    }
};
export const evt_1_2: Event = {
    title: `Cabin Fever`,
    description: `People are itching to get back to their normal lives. For some, it's becoming a need. 
    Many have lost their jobs and others, particularly young people, are ignoring the restrictions anyway.`,
    extraDetails: {
        public: {
            speech: `My mate Paul just broke up with his partner. It wasn't him, it was covid. Apparently he's not the only one...`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://docs.cdn.yougov.com/4v7zasn014/International%20COVID%20personal%20impact[1].pdf`,
                description: `2% of UK respondents in early 2021 claim that they had one or more relationships ruined and that 'COVID-19 was the main reason'.`
            }
        },
        business: {
            speech: `The unemployment rate is really high... displaced workers are suffering.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `Cases are falling very fast but we are seeing a rise in loneliness. We could be on the verge of a wellbeing crisis.`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://yougov.co.uk/topics/health/survey-results/daily/2020/10/09/26286/3`,
                description: `By early 2021, 33% of UK citizens reported feeling lonely, while 28% reported that they had not.`
            }
        }
    },
    response1: {
        label: `Let my people work!`,
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `The Nightly Mail`,
            content: `Healthcare workers overwhelmed as cases continue to rise`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Peter Cottontail @ParanoidPete`,
            content: `People... people everywhere...`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Me when I go outside for the first time in 525,600 days`,
            content: `https://thumbs.gfycat.com/DeliriousDenseArgali-small.gif`
        }],
        getNextEvent: () => {
            return evt_2_2
        },
        ending: '',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2020/10/09/26286/3`,
            description: `The split reaction here is meant to model how lockdown fatigue can make people change their mind on lockdown. Taken together with the split opinion on whether they have felt lonely during the pandemic (source linked), this choice was estimated to split public support.`
        }
    },
    response2: {
        label: `Stay inside, please`,
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
            content: `Continued COVID measures risk mental health crisis`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Drac Ula @DefinitelyNotAVampire`,
            content: `Come on, ya'll. Being inside isn't THAT bad. 😅`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Eugene H. Krabs @TheKrustyKrab`,
            content: `Me restaurant hasn't had any customers in months. LIFT RESTRICTIONS NOW!!!`
        }],
        getNextEvent: () => {
            return evt_2_3
        },
        ending: '',
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://yougov.co.uk/topics/health/survey-results/daily/2020/10/09/26286/3`,
          description: `The split reaction here is meant to model how lockdown fatigue can make people change their mind on lockdown. Taken together with the split opinion on whether they have felt lonely during the pandemic (source linked), this choice was estimated to split public support.`
        }
    }
};
export const evt_2_1: Event = {
    title: `But at what cost?`,
    description: `Experts are recommending much stronger restrictions, immediately. 
    Doctors, epidemiologists, economists, and even your dentist are telling you to get those case numbers down. 
    This is a tough choice. 
    While the rest of the world has reduced their infection rate via careful restrictions, your people have at least enjoyed something resembling a normal lifestyle.`,
    extraDetails: {
        public: {
            speech: `We enjoy our freedom. Please don't take that away! Pretty, pretty please!`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `We're getting less customers and we're facing logistical challenges but restrictions would cost us more.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `Hospitals are completely full. People are scared and have started self-isolating on their own.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
        label: `No. We stay the course.`,
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `The Quarterly Prophet`,
            content: `As cases rise, concerned citizens turn to self-isolation`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Lynyrd Skynyrd @FreeBird72`,
            content: `https://media1.giphy.com/media/6901DbEbbm4o0/giphy.gif`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Navi @EyyOcarina`,
            content: `Hey, listen! Listen to experts!`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/11/02042/2`,
            description: `
                The split reaction here is intended to model sunk cost fallacy. Loosely based on the roughly half of the USA 
                who supported former President Trump and his no-lockdown approach to the pandemic. Arguably this is because
                that they had invested in him so they were more likely to hold steadfast in their views. There is some evidence that 
                the public in other countries would similarly defend the status-quo on COVID-19 policies, for example UK respondents 
                agreed that most people were not obeying lockdown (YouGov) but did not agree that it should be enforced (source linked).
            `
        }
    },
    response2: {
        label: `Tick tock it's restriction o'clock`,
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
            type: `article`,
            isHappy: true,
            head: `The Blue Pill`,
            content: `Lockdown saves thousands of lives, according to Medical examiner`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Mouse Man @HickeryDickeryDock`,
            content: `LET'S DO THIS THING #CovidIsOverParty`
        }, {
            type: `meme`,
            isHappy: false,
            head: `The only thing you're restricting is freedom`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/846/426/fc0.gif`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/11/02042/2`,
            description: `
                The split reaction here is intended to model sunk cost fallacy. Loosely based on the roughly half of the USA 
                who supported former President Trump and his no-lockdown approach to the pandemic. Arguably this is because
                that they had invested in him so they were more likely to hold steadfast in their views. There is some evidence that 
                the public in other countries would similarly defend the status-quo on COVID-19 policies, for example UK respondents 
                agreed that most people were not obeying lockdown (YouGov) but did not agree that it should be enforced (source linked).
            `
        }
    }
};
export const evt_2_2: Event = {
    title: `Bad Moon Rising`,
    description: `The number of COVID-19 cases has reached an all-time high. 
    Hospitals are filling up quickly. The media is flooded with climbing case numbers. 
    Your citizens are becoming worried.`,
    extraDetails: {
        public: {
            speech: `Have you seen those case numbers? I'm scared to go out.. `,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `Restrictions might make businesses unprofitable. Some may go out of business..`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `If we do not put restrictions the cases will rise even higher. Close it down. CLOSE IT ALL DOWN.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
        label: `Things are in hand. As you were.`,
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `Quarterly Prophet`,
            content: `As cases rise, concerned citizens turn to self-isolation`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Confused Callie @FloofyCooz`,
            content: `Why are we keeping things open while cases are rising???? MAKE IT MAKE SENSE.`
        }, {
            type: `meme`,
            isHappy: true,
            head: `us vs covid restrictions`,
            content: `https://giphy.com/gifs/fail-failing-what-teachers-think-1BQdjXovIqSLS`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `
                85% of UK respondents in early 2021 supported a second lockdown. 
                However, in order to model the effects of passing time, a 15% mallus was applied 
                which reduces support for this based on either lockdown fatigue (if you previously chose to implement restrictions), 
                or sunk cost fallacy (entrenchment in the status-quo if you did not previously chose to implement restrictions).
            `
        }
    },
    response2: {
        label: `STOP THE BUSINESSES!`,
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
            content: `Inconsistent response to pandemic causes mass confusion`
        }, {
            type: `article`,
            isHappy: false,
            head: `The Informant`,
            content: `Businesses struggle to adapt with constantly changing rules`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Henry the Hippo @HelpfulHenry`,
            content: `To everyone struggling with staying inside, just know we're ending the pandemic 💪`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `
                85% of UK respondents in early 2021 supported a second lockdown. 
                However, in order to model the effects of passing time, a 15% mallus was applied 
                which reduces support for this based on either lockdown fatigue (if you previously chose to implement restrictions), 
                or sunk cost fallacy (entrenchment in the status-quo if you did not previously chose to implement restrictions).
            `
        }
    }
};
export const evt_2_3: Event = {
    title: `Where Is My Mind?`,
    description: `People are struggling. 
    Social deprivation, being restricted in where and who they can visit, and other personal hardships have lead to a negative effect on people's mental health. People feel they have to break restrictions to meet their needs and are asking for relaxed restrictions.`,
    extraDetails: {
        public: {
            speech: `I'm not one to complain about mental health but I'm not doing great. Apparently, young people more likely to report depression now.`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://yougov.co.uk/topics/lifestyle/articles-reports/2021/02/04/yougov-2020-personality-study-impact-covid-19`,
                description: `53% of UK respondents in early 2021 indicated that their mental health had deteriorated, of which two-thirds (63%) report feeling anxious at least several times a month since March.`
            }
        },
        business: {
            speech: `COVID-19 cases are low. We can finally start focusing on opening businesses and getting the economy on track.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `Wellbeing and mental health are important, but another period of restrictions could eradicate COVID-19 entirely.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
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
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `The Blues News`,
            content: `COVID cases increase sharply, flooding hospitals `
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
        ending: `BusinessGuru`,
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://docs.cdn.yougov.com/fn83kzrj9i/International%20COVID%20personal%20impact.pdf`,
            description: `84% of UK respondents in early 2021 believe that mental health is at least as important as physical health so would be likely to support relaxing restrictions for this reason.`
        }
    },
    response2: {
        label: `Let's eliminate COVID while we can.`,
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
            head: `Medicine Today`,
            content: `COVID cases reach ZERO. Is COVID gone for good?`
        }, {
            type: `article`,
            isHappy: true,
            head: `Stock Box`,
            content: `Businesses are reopening as COVID cases continue to drop`
        }, {
            type: `meme`,
            isHappy: false,
            head: `That was kinda harsh...`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/298/697/ab0.jpg`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: `CovidTerminator`,
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://docs.cdn.yougov.com/fn83kzrj9i/International%20COVID%20personal%20impact.pdf`,
          description: `84% of UK respondents in early 2021 believe that mental health is at least as important as physical health so would be likely to support relaxing restrictions for this reason.`
        }
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
