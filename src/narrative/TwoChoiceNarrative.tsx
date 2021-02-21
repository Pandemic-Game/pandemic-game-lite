import { Event } from '../model/Events';
import { Response } from '../model/Response';
import { GameState } from '../model/GameState';
import { Reputations } from './Reputations';

const LiftLockdownResponse: React.FC<{ onDismiss: () => void }> = (props: { onDismiss: () => void }) => <div>Cases rising shaply <button onClick={() => props.onDismiss()}>Proceed</button></div>
const ContinueLockdownResponse: React.FC<{ onDismiss: () => void }> = (props: { onDismiss: () => void }) => <div>People are restless<button onClick={() => props.onDismiss()}>Proceed</button></div>

export const LiftLockdown: Response = {
    id: "test.1.response.liftLockdown",
    eventId: "test.1",
    isApplicable: (gameState: GameState) => true,
    onSelect: (gameState: GameState) => ({
        updatedIndicators: {
            ...gameState.indicators,
            lockdownEffectiveness: 0,
            publicSupport: 1,
            businessSupport: 1,
            healthcareSupport: -1
        },
        reputations: [Reputations.AntiVaxxer],
        feedback: {
            responseSocialMediaComponent: (onDismiss: () => void) => <LiftLockdownResponse onDismiss={onDismiss} />,
            // responseDataComponent: (props: {}) => <div>Show first level of data - lockdown ended</div>,
            // responseDataDeepDiveComponent: (props: {}) => <div>Show deep dive into the data - lockdown ended</div>,
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
    isApplicable: (gameState: GameState) => true,
    onSelect: (gameState: GameState) => ({
        updatedIndicators: {
            ...gameState.indicators,
        },
        reputations: [Reputations.CovidTerminator],
        feedback: {
            responseSocialMediaComponent: (onDismiss: () => void) => <ContinueLockdownResponse onDismiss={onDismiss} />,
            // responseDataComponent: (props: {}) => <div>Show first level of data - lockdown remains</div>,
            // responseDataDeepDiveComponent: (props: {}) => <div>Show deep dive into the data - lockdown remains</div>,
        },
        playerActions: {
            containmentPolicies: [],
            capabilityImprovements: []
        }
    }),
}


interface EventProps {
    responses: Response[],
    onResponseSelected: (response: Response) => void
}

interface ResponseProps {
    response: Response,
    onResponseSelected: (response: Response) => void
}

const EventResponseAction: React.FC<ResponseProps> = (props: ResponseProps) => {
    const { response, onResponseSelected } = props;
    return (<div><button onClick={() => { onResponseSelected(response) }}>{response.id}</button></div>)
}

const TestEventMain: React.FC<EventProps> = (props: EventProps) => {
    const { responses, onResponseSelected } = props;
    return (<div>
        <h2>Yay! Vaccine incoming. What should we do?</h2>
        {responses.map(response => <EventResponseAction response={response} onResponseSelected={onResponseSelected}></EventResponseAction>)}
    </div>)
}

/*
const TestEventDetail: React.FC<{}> = (props: {}) => {
    return (<div>Detail of the event exposing different viewpoints and tradeoffs</div>)
}
*/

export const TestEvent: Event = {
    id: "test.1",
    canRun: (gameState: GameState) => gameState.turnNumber === 1,
    eventMainComponent: (onResponseSelected: (response: Response) => void) => <TestEventMain onResponseSelected={onResponseSelected} responses={[LiftLockdown, ContinueLockdown]} />,
    // eventDetailComponent: TestEventDetail,
    responses: [LiftLockdown, ContinueLockdown]
}