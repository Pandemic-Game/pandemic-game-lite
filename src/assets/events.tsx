import {Event} from '../model/Event';

export const evt_0_0: Event = {
    title: `Welcome to the jungle`,
    description: `24 in 1000 people have caught COVID-19 this month and the number of new cases of are rising. You are being pressured to make a response to the situation by either enforcing a lockdown or remaining open.`,
    extraDetails: {
        public: {
            speech: `If you wanna close bars, restaurants and other businesses I support you, but people probably won't obey lockdown as much as last time`,
            sourceDetails: {
                sourceName: `YouGov `,
                link: `https://docs.cdn.yougov.com/pkv90of78k/SunOnSunday_CoronaResults_210115.pdf`,
                description: `76% of UK respondants think others are complying less with the second (Winter 2020) lockdowns compared with the first (Spring 2019) lockdowns`
            }
        },
        business: {
            speech: `Lockdown will hurt businesses in the short-term!`,
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
        label: `Remain open`,
        getParentEvent: () => {
            return evt_0_0
        },
        updatedIndicators: {
            supportForLastResponse: 11,
            oppositionToLastResponse: 85,
            newCases: 45,
            lockdownCosts: 0,
            medicalCosts: 40
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `Daily Bugle`,
            content: `New cases rising sharply`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Sally Hanson @ManiPedi223`,
            content: `Idk what I would do without my weekly nail appointment #TreatYourself`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Queen Bae @PutARingOnIt`,
            content: `If you love COVID so much, why don't you MARRY IT?`
        }],
        getNextEvent: () => {
            return evt_1_1
        },
        ending: '',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `Data for a 'second' lockdown this year suggests 85% of people support this.`
        }
    },
    response2: {
        label: `Lock it down`,
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
            head: `Me in public places this year`,
            content: `https://media.giphy.com/media/gGaEm6jMNs98JuWiPv/giphy.gif`
        }],
        getNextEvent: () => {
            return evt_1_2
        },
        ending: '',
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
          description: `Data for a 'second' lockdown this year suggests 85% of people support this.`
        }
    }
};
export const evt_1_1: Event = {
    title: `2 KOOL 4 SKOOL`,
    description: `Exams are coming up! Opening up the schools and universities for exams would create a spike in cases. Continuing with distance learning would postpone exams or cancel them altogether`,
    extraDetails: {
        public: {
            speech: `Sure, opening schools sounds great, but putting our kids at risk right now without the proper precautions is shady af.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `Opening schools is a risk, but it is the first step in reopening our economy and getting everything back to normal operations.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `Opening schools and universities is the single biggest factor contributing to an increase in cases.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
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
            lockdownCosts: 0,
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
            content: `My kids CANNOT be trusted to wear a mask all day. This is RIDICULOUS.`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Kared @GlitterMommy`,
            content: `The kids are back in school!!! #HelloFreedom #Winning`
        }],
        getNextEvent: () => {
            return evt_2_1
        },
        ending: '',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://docs.cdn.yougov.com/42ib2mxynp/Globalism%20-%20lockdown%20measures.pdf`,
            description: `Data from the lockdown suggests 67% of people supported closing schools and universities.`
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
          description: `Data from the lockdown suggests 67% of people supported closing schools and universities.`
        }
    }
};
export const evt_1_2: Event = {
    title: `Cabin Fever`,
    description: `People are tired of being in lockdown. There are increasing reports of nonessential travelling, citizens meeting in large groups, and ignoring social distancing mandates.`,
    extraDetails: {
        public: {
            speech: `My mate Paul just ended his relationship and blamed COVID. Apparently it's happened to other people too.`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://docs.cdn.yougov.com/4v7zasn014/International%20COVID%20personal%20impact[1].pdf`,
                description: `2% of relationships ended due to COVID in the UK`
            }
        },
        business: {
            speech: `Businesses are suffering in lockdown, but the only way to get back to a normal economy is to end the pandemic.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `One in three people have admitted to feeling lonely during the pandemic. Socialisation would help wellbeing but increase cases.`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://yougov.co.uk/topics/health/survey-results/daily/2020/10/09/26286/3`,
                description: `During pandemic, 33% of UK citizens reported feeling lonely, while 28% reported not being affected.`
            }
        }
    },
    response1: {
        label: `Let my people go!`,
        getParentEvent: () => {
            return evt_1_2
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 14,
            lockdownCosts: 0,
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
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/11/02042/2`,
            description: `People are relatively split on having to stay inside is making them lonely AND whether to have strict policing. So, in this situations the response would be split.`
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
            content: `Come on, guys. Being inside isn't THAT bad. 😅`
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
          link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/11/02042/2`,
          description: `People are relatively split on having to stay inside is making them lonely AND whether to have strict policing. So, in this situations the response would be split.`
        }
    }
};
export const evt_2_1: Event = {
    title: `But at what cost?`,
    description: `Experts are yelling at you to lock down the nation. Doctors, epidemiologists, economists, and even your dentist is telling you to tighten restrictions! While the rest of the world is in lockdown, your people have enjoyed their freedom.`,
    extraDetails: {
        public: {
            speech: `LOCKDOWN!!!!`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `LOCKDOWN!!!!`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `LOCKDOWN!!!!`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
        label: `...nah`,
        getParentEvent: () => {
            return evt_2_1
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 90,
            lockdownCosts: 0,
            medicalCosts: 104
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `Financial Enquirer`,
            content: `Turns out it's hard to run a business when COVID exists`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Will Wallace @ScotlandPride`,
            content: `https://media1.giphy.com/media/6901DbEbbm4o0/giphy.gif`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Uncle Joe @UnityRulez`,
            content: `WHY WON'T YOU LISTEN TO EXPERTS?! #ComeOnMan`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: ``,
            link: ``,
            description: `People will be split, they've gotten used to freedom because of sunk cost fallacy - now they have invested in freedom they're more likely to hold steadfast in their views.`
        }
    },
    response2: {
        label: `Tick tock it's lockdown o'clock`,
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
            head: `King Arthur @RoundTable4Lyfe`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/846/426/fc0.gif`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: {
            sourceName: ``,
            link: ``,
            description: `People will be split, they've gotten used to freedom because of sunk cost fallacy - now they have invested in freedom they're more likely to hold steadfast in their views.`
        }
    }
};
export const evt_2_2: Event = {
    title: `Bad Moon Rising`,
    description: `The number of COVID-19 cases has reached an all-time high. Some claim this is due to ignoring guidelines, others point fingers at the lockdown restrictions being too relaxed or too strict.`,
    extraDetails: {
        public: {
            speech: `Have you seen those case numbers? Lock it down. LOCK IT ALL DOWN.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        business: {
            speech: `We can open if we take the proper precautions. We are much more prepared to do this now than we have been before.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        },
        medical: {
            speech: `We must keep restrictions in place. If we lift them, the cases will continue to rise astronomically.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
        label: `FREEDOM!`,
        getParentEvent: () => {
            return evt_2_2
        },
        updatedIndicators: {
            supportForLastResponse: 26,
            oppositionToLastResponse: 60,
            newCases: 90,
            lockdownCosts: 0,
            medicalCosts: 39
        },
        socialMediaResponse: [{
            type: `article`,
            isHappy: false,
            head: `Financial Enquirer`,
            content: `Turns out it's hard to run a business when COVID exists`
        }, {
            type: `tweet`,
            isHappy: false,
            head: `Confused Callie @FloofyCooz`,
            content: `Why are we keeping things open while cases are rising???? MAKE IT MAKE SENSE.`
        }, {
            type: `meme`,
            isHappy: true,
            head: `Will Wallace @ScotlandPride`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/846/426/fc0.gif`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'GenghisCannot',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `As with the first event, data for a 'second' lockdown this year suggests 85% of people support this. This is similar to the current event since it is a response to rising covid cases, therefore a similar value is used here but adjusted for more lockdown fatigue (15% modifier) so 11 --> 26 & 85 --> 70 / from school the sunk cost fallacy would provide this 15%.`
        }
    },
    response2: {
        label: `LOCKDOWN!`,
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
            content: `Inconsistent lockdown policies cause mass public confusion`
        }, {
            type: `article`,
            isHappy: false,
            head: `The Informant`,
            content: `Businesses struggle to adapt with constantly changing rules`
        }, {
            type: `tweet`,
            isHappy: true,
            head: `Henry the Hippo @HelpfulHenry`,
            content: `I don't want to go into lockdown but I do want to end COVID sooooooooo`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: 'FlipFlopper',
        sourceDetails: {
            sourceName: `YouGov`,
            link: `https://yougov.co.uk/topics/health/survey-results/daily/2021/01/05/dee1c/1`,
            description: `As with the first event, data for a 'second' lockdown this year suggests 85% of people support this. This is similar to the current event since it is a response to rising covid cases, therefore a similar value is used here but adjusted for more lockdown fatigue (15% modifier) so 11 --> 26 & 85 --> 70 / from school the sunk cost fallacy would provide this 15%.`
        }
    }
};
export const evt_2_3: Event = {
    title: `Where Is My Mind?`,
    description: `There are increasing reports that lockdown is negatively effecting people's wellbeing and mental health. Charities have started advocating for relaxing restrictions.`,
    extraDetails: {
        public: {
            speech: `I'm not one to complain about mental health but I'm not doing great. Apparently, young people more likely to be depressed now.`,
            sourceDetails: {
                sourceName: `YouGov`,
                link: `https://yougov.co.uk/topics/lifestyle/articles-reports/2021/02/04/yougov-2020-personality-study-impact-covid-19`,
                description: `53% of people in UK have revealed a decrease in mental health, of which two-thirds (63%) report feeling anxious at least several times a month since March. 46% of 16-24 year olds say they have experienced loneliness every week since March, which is significantly more than other age groups.`
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
            speech: `Mental health is important, but COVID is not entirely eliminated. Another period of lockdown could eradicate it.`,
            sourceDetails: {
                sourceName: ``,
                link: ``,
                description: ``
            }
        }
    },
    response1: {
        label: `Relax lockdown`,
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
            description: `Mental health was deemed atleast as important as physical health, according to a UK survey so 84% would be likely to support relaxing lockdown.`
        }
    },
    response2: {
        label: `No exceptions`,
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
            content: `Business eye reopening as COVID cases continue to drop`
        }, {
            type: `tweet`,
            isHappy: false,
            head: ` Nate the Great @SoleSurvivor`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/298/697/ab0.jpg`
        }],
        getNextEvent: () => {
            return ending
        },
        ending: `CovidTerminator`,
        sourceDetails: {
          sourceName: `YouGov`,
          link: `https://docs.cdn.yougov.com/fn83kzrj9i/International%20COVID%20personal%20impact.pdf`,
          description: `Mental health was deemed atleast as important as physical health, according to a UK survey so 84% would be likely to support relaxing lockdown.`
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
        label: `No exceptions`,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 9.99,
            lockdownCosts: 8.88,
            medicalCosts: 7.77
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
            content: `Business eye reopening as COVID cases continue to drop`
        }, {
            type: `tweet`,
            isHappy: false,
            head: ` Nate the Great @SoleSurvivor`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/298/697/ab0.jpg`
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
        label: `No exceptions`,
        getParentEvent: () => {
            return evt_2_3
        },
        updatedIndicators: {
            supportForLastResponse: 50,
            oppositionToLastResponse: 50,
            newCases: 9.99,
            lockdownCosts: 8.88,
            medicalCosts: 7.77
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
            content: `Business eye reopening as COVID cases continue to drop`
        }, {
            type: `tweet`,
            isHappy: false,
            head: ` Nate the Great @SoleSurvivor`,
            content: `https://i.kym-cdn.com/photos/images/newsfeed/001/298/697/ab0.jpg`
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
