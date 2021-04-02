import {Ending} from '../model/Event';
import * as LeaderStyle from "../components/leaderStyles";

export const Endings = (showSource: Function):Record<string, Ending> => {
    return {
        GenghisCannot: {
            ele: <LeaderStyle.GenghisCannot onClickSource={showSource} />,
            bg: "bg-yellow-400",
            winTitle: "Based on your choices you can’t open back up for a long time!",
            winDescription:
            "You have a high number of cases, lots of people are ending up in hospital and even dying. People are scared.",
        },
        FlipFlopper: {
            ele: <LeaderStyle.FlipFlopper onClickSource={showSource} />,
            bg: "bg-red-400",
            winTitle: "Based on your choices you can’t open back up yet",
            winDescription:
            "By re-opening too early, cases will rise, leading to a need for restrictions in the future.",
        },
        CovidTerminator: {
            ele: <LeaderStyle.CovidTerminator onClickSource={showSource} />,
            bg: "bg-green-400",
            winTitle: "Based on your choices you can safely open up!",
            winDescription:
            "Cases have gone to zero. People are satisfied and demand a return to normality! With no need for further restrictions the only sensible option is to re-open",
        },
        BusinessGuru: {
            ele: <LeaderStyle.BusinessGuru onClickSource={showSource} />,
            bg: "bg-blue-400",
            winTitle: "Based on your choices you will be able to open up.. soon",
            winDescription:
            "While navigating the trade-off between re-opening businesses yet keeping cases low, the end of the pandemic is in sight. Through continued cycles of opening and closing, with some patience, the end will come.",
        }
    }
};
