import { Event } from '../model/Events';
import { Response } from '../model/Response';
import { GameState } from '../model/GameState';

interface EventProps {
    responses: Response[]
}

const EventResponseAction: React.FC<{ response: Response }> = (props: { response: Response }) => {
    const response = props.response
    return (<div><button onClick={() => { console.log("chose response") }}>{response.name}</button></div>)
}

const TestEventMain: React.FC<EventProps> = (props: EventProps) => {
    const responses = props.responses;
    return (<div>
        <h2>Yay! Vaccine incoming. What should we do?</h2>
        {responses.map(response => <EventResponseAction response={response}></EventResponseAction>)}
    </div>)
}

const TestEventDetail: React.FC<{}> = (props: {}) => {
    return (<div>Detail of the event exposing different viewpoints and tradeoffs</div>)
}

export const LiftLockdown: Response = {
    id: "test.1.response.liftLockdown",
    eventId: "test.1",
    name: "Lift lockdown",
    isApplicable: (gameState: GameState) => true,
    onSelect: (gameState: GameState) => ({
        updatedIndicators: {
            ...gameState.indicators,
            lockdownEffectiveness: 0,
            publicSupport: 1,
            businessSupport: 1,
            healthcareSupport: -1
        },
        feedback: {
            responseSocialMediaComponent: (props: {}) => <div>Cases rising shaply</div>,
            responseDataComponent: (props: {}) => <div>Show first level of data - lockdown ended</div>,
            responseDataDeepDiveComponent: (props: {}) => <div>Show deep dive into the data - lockdown ended</div>,
        },
        playerActions: {
            containmentPolicies: [],
            capabilityImprovements: []
        }
    }),
}

export const ContinueLockdown: Response = {
    id: "test.1.response.continueLockdown",
    eventId: "test.1",
    name: "Continue lockdown",
    isApplicable: (gameState: GameState) => true,
    onSelect: (gameState: GameState) => ({
        updatedIndicators: {
            ...gameState.indicators,
        },
        feedback: {
            responseSocialMediaComponent: (props: {}) => <div>Lockdown remains in effect as the vaccine is deployed</div>,
            responseDataComponent: (props: {}) => <div>Show first level of data - lockdown remains</div>,
            responseDataDeepDiveComponent: (props: {}) => <div>Show deep dive into the data - lockdown remains</div>,
        },
        playerActions: {
            containmentPolicies: [],
            capabilityImprovements: []
        }
    }),
}

export const TestEvent: Event = {
    id: "test.1",
    name: "test.1",
    description: "A test event to see how this can work in react",
    canRun: (gameState: GameState) => true,
    eventMainComponent: TestEventMain,
    eventDetailComponent: TestEventDetail,
    responses: [LiftLockdown, ContinueLockdown]
}