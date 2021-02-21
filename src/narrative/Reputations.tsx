
const AntiVaxxer = () => (<h2>Anti-vaxxer!!</h2>)
const CovidTerminator = () => (<h2>CovidTerminator!!</h2>)

export const Reputations = {
    AntiVaxxer: {
        id: "reputation.antivaxxer",
        reputationComponent: () => <AntiVaxxer />
    },
    CovidTerminator: {
        id: "reputation.covidTerminator",
        reputationComponent: () => <CovidTerminator />
    }
}