import React, { useEffect, useState } from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import cloneDeep from "lodash/cloneDeep";
import { Event, SourceDetails } from "./model/Event";
import { Response, ResponseItem } from "./model/Response";
import { Indicators } from "./model/Indicators";
import { UK } from "./model/Scenario";
import * as Story from "./assets/events";
import * as LeaderStyle from "./components/leaderStyles";
import { Tweet, News, Meme } from "./components/socialFeedback";
import { Splash, Introduction, Data } from "./components/views/start";
import { SourceScreen, ExplanationScreen } from "./components/views/source";
import { EventScreen, EventExtra, EventResponse } from "./components/views/event";
import { FeedbackScreen1, FeedbackScreen2 } from "./components/views/feedback";
import { Ending, AllEndings, EndLeaderStyle } from "./components/views/end";
import FontFaceObserver from "fontfaceobserver";
import { ToastContainer } from "react-toastify";
import { ImageCacheInstance } from "./ImageCache";
/** image assets */
import EndCoronaVirusLogo from "./assets/PNG/ecvlogo.png";
import GameLogo from "./assets/SVG/gamelogo.svg";
import endClosed from "./assets/SVG/ending_restrictions.svg";
import endOpened from "./assets/SVG/ending_opened.svg";
import SVGWannaSeeData from "./assets/SVG/sneaky-wannaSeeData.svg";
import SVGWannaSeeModel from "./assets/SVG/sneaky-wannaSeeModel.svg";
import lockdownCoin from "./assets/SVG/coin-lockdown.svg";
import medicalCoin from "./assets/SVG/coin-medical.svg";
import iconFlipflop from "./assets/SVG/icon-flipflop.svg";
import iconGenghis from "./assets/SVG/icon-genghis.svg";
import iconGuru from "./assets/SVG/icon-guru.svg";
import iconTerminator from "./assets/SVG/icon-terminator.svg";
import { toast } from "react-toastify";
import { useDataCollectorContext } from "./services/DataCollectorProvider";

// Load story
const firstEvent = Story.evt_0_0;

/**
 * Main game loop
 */
const GameLoop: React.FC = () => {
  const [history, setHistory] = useState<Response[]>([]);
  const [event, setEvent] = useState<Event>(firstEvent); // Load first event
  const [view, setView] = useState<string>("start");
  const [previousView, setPreviousView] = useState<string>("start");
  const [ending, setEnding] = useState<string>("");
  const [delayUntilOpening, setDelayUntilOpening] = useState<number>(5);
  const [canOpenAllRestrictions, setCanOpenAllRestrictions] = useState<boolean>(
    false
  );
  const [openAllRestrictions, setOpenAllRestrictions] = useState<boolean>(
    false
  );
  const [sourceToView, setSourceToView] = useState<SourceDetails>({
    sourceName: "",
    link: "",
    description: "",
  });

  const dataCollectorContext = useDataCollectorContext();

  const initialScenario: Indicators = {
    // Load initial scenario
    supportForLastResponse: UK.initialPublicSupport,
    oppositionToLastResponse: 100 - UK.initialPublicSupport,
    newCases: Math.round(
      (UK.initialNumInfected / UK.totalPopulation) * 30 * 1000
    ), // Monthly cases per 1000 people
    lockdownCosts: 11,
    medicalCosts: 26,
  };

  // Controls
  const show = (nextView: string) => {
    setPreviousView(view);
    setView(nextView);
  };

  const showSource = (src: SourceDetails) => {
    setSourceToView(src);
    show("sources");
  };
  const showExplanation = (src: SourceDetails) => {
    setSourceToView(src);
    show("explanation");
  };

  const endings: Record<
    string,
    { ele: JSX.Element; bg: string; winTitle: string; winDescription: string }
  > = {
    GenghisCannot: {
      ele: <LeaderStyle.GenghisCannot onClickSource={showSource} />,
      bg: "bg-yellow-400",
      winTitle: "Based on your choices you can’t open back up for a long time!",
      winDescription:
        "You have a high number of cases, lots of people are ending up in hospital and even dying. People are scared.",
    },
    FlipFlopper: {
      ele: <LeaderStyle.FlipFlopper onClickSource={showSource} />,
      bg: "bg-red-200",
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
    },
  };

  const getLastResponse = (): Response =>
    cloneDeep(history[history.length - 1]);

  const getIndicatorsLastMonth = (): Indicators =>
    history.length === 1
      ? initialScenario
      : cloneDeep(history[history.length - 2].updatedIndicators);

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {
    setHistory(history.concat(playerChoice));

    // Show new event or if at end show ending
    if (playerChoice.ending) {
      setDelayUntilOpening(playerChoice.updatedIndicators.newCases * 5);
      setEnding(playerChoice.ending);
      setTimeout( function(){
        setCanOpenAllRestrictions(true);
        }, playerChoice.updatedIndicators.newCases * 5000
      );
    } else {
      setEvent(playerChoice.getNextEvent());
    }

    // Show feedback for choice
    show("feedback1");
  };

  // Show feedback
  const getSocialFeedback = (feedback: ResponseItem[]): JSX.Element => {
    function constructElement(it: ResponseItem, i: number) {
      switch (it.type) {
        case "tweet":
          return (
            <Tweet
              fb={it}
              animation={`animate__delay-${i}s	animate__animated animate__bounceIn`}
            />
          );
        case "meme":
          return (
            <Meme
              fb={it}
              animation={`animate__delay-${i}s	animate__animated animate__bounceIn`}
            />
          );
        case "article":
          return (
            <News
              fb={it}
              animation={`animate__delay-${i}s	animate__animated animate__bounceIn`}
            />
          );
      }
    }
    return (
      <div className="max-w-full w-full p-2 m-2 flex flex-col justify-center items-center ">
        {constructElement(feedback[0], 0)}
        {constructElement(feedback[1], 1)}
        {constructElement(feedback[2], 2)}
      </div>
    );
  };

  // Reset game
  const reset = () => {
    window.location.reload();
  };

  // Game mode selection
  switch (view) {
    // Intro screens
    case "start":
      return (
        <Splash
          onClick={() => {
            show("introduction");
          }}
        />
      );
    case "introduction":
      return (
        <Introduction
          onClick = {{
            continue: () => {
              show("event");
            },
            source: showSource,
            data: () => {
              show("data");
            }
          }}
        />
      );
    case "data":
      return (
        <Data
          onClick = {{
            back: () => show("introduction"),
            source: showSource
          }}
        />
      );

    // Event screens
    case "event":
      return <EventScreen event={event} onClick={() => show("eventExtra")} />;
    case "eventExtra":
      return (
        <EventExtra
          event={event}
          onClickSource={showSource}
          onClickBack={() => show("eventResponse")}
        />
      );
    case "eventResponse":
      return <EventResponse event={event} onClick={processPlayerChoice} />;

    // View sources show
    case "sources":
      return (
        <SourceScreen
          sourceDetails={sourceToView}
          onClick={() => {
            show(previousView);
          }}
        />
      );
    case "explanation":
      return (
        <ExplanationScreen
          sourceDetails={sourceToView}
          onClick={() => {
            show(previousView);
          }}
        />
      );

    // Feedback screens
    case "feedback1":
      return (
        <FeedbackScreen1
          response={getLastResponse()}
          feedback={getSocialFeedback(getLastResponse().socialMediaResponse)}
          onClick={() => show("feedback2")}
        />
      );
    case "feedback2":
      return (
        <FeedbackScreen2
          response={getLastResponse()}
          indicatorsLastTurn={getIndicatorsLastMonth()}
          onClickContinue={() => {
            if (ending) {
              dataCollectorContext.dataCollector.sendGameEndSignal(
                ending,
                history
              );
              show("end");
            } else {
              show("event");
            }
          }}
          onClickSource={showSource}
        />
      );

    // End show
    case "end":
      return (
        <Ending
          leaderStyle={endings[ending]}
          delay={delayUntilOpening}
          opened={openAllRestrictions}
          canOpenAllRestrictions={canOpenAllRestrictions}
          onClick={{
            openButton: {
              enabled: function(){
                setOpenAllRestrictions(true);
                toast.success(`Continuing to end screen in 5s...`)
                setTimeout(function(){
                  setView('leaderStyle');
                }, 5000)
              },
              disabled: function(){toast.success(`Can't open up yet, wait ${delayUntilOpening}s!`)}
            },
            continue: function(){show("leaderStyle")},
            why: showExplanation
        }}
      />
      );
    case "leaderStyle":
      return (
        <EndLeaderStyle
          leaderStyle={endings[ending]}
          onClick={() => {
            show("allEndings");
          }}
        />
      );
    case "allEndings":
      return <AllEndings onClick={showSource} onReplay={reset} />;
    default:
      return <></>;
  }
};

/**
 * Inline styles are used on purpose so we don't need to load tailwind css.
 */
const Loading: React.FC = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "95vh",
      }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const preloadAssets = () => {
  const assets = [
    new FontFaceObserver("Bebas Neue").load(),
    new FontFaceObserver("Playfair Display").load(),
    ImageCacheInstance.read(EndCoronaVirusLogo),
    ImageCacheInstance.read(GameLogo),
    ImageCacheInstance.read(SVGWannaSeeData),
    ImageCacheInstance.read(SVGWannaSeeModel),
    ImageCacheInstance.read(endClosed),
    ImageCacheInstance.read(endOpened),
    ImageCacheInstance.read(lockdownCoin),
    ImageCacheInstance.read(medicalCoin),
    ImageCacheInstance.read(iconFlipflop),
    ImageCacheInstance.read(iconGenghis),
    ImageCacheInstance.read(iconGuru),
    ImageCacheInstance.read(iconTerminator),
    ImageCacheInstance.read(
      `https://giphy.com/gifs/hulu-cbs-star-trek-the-next-generation-3o7TKCskhXtrq3nsBy`
    ),
    ImageCacheInstance.read(
      `https://media1.giphy.com/media/6901DbEbbm4o0/giphy.gif`
    ),
    ImageCacheInstance.read(
      `https://giphy.com/gifs/fail-failing-what-teachers-think-1BQdjXovIqSLS`
    ),
    ImageCacheInstance.read(
      `https://thumbs.gfycat.com/DeliriousDenseArgali-small.gif`
    ),
    ImageCacheInstance.read(
      `https://media1.giphy.com/media/6901DbEbbm4o0/giphy.gif`
    ),
    ImageCacheInstance.read(
      `https://i.kym-cdn.com/photos/images/newsfeed/001/846/426/fc0.gif`
    ),
  ];

  return Promise.all(assets);
};

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  const dataCollectorContext = useDataCollectorContext();

  useEffect(() => {
    preloadAssets()
      .catch((err) => {
        console.error(err);
        setReady(true);
      })
      .then(() => {
        dataCollectorContext.dataCollector.sendGameStartSignal();
        setReady(true);
      });
  }, [dataCollectorContext.dataCollector]);

  return (
    <>
      <ToastContainer />
      {ready ? <GameLoop /> : <Loading />}
    </>
  );
};

export default App;
