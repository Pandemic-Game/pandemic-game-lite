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
import { Splash, Introduction } from "./components/views/start";
import { SourceScreen } from "./components/views/source";
import { EventScreen, EventExtra } from "./components/views/event";
import {
  FeedbackScreen1,
  FeedbackScreen2,
  FeedbackExtra,
} from "./components/views/feedback";
import { Ending, AllEndings, ViewEnding } from "./components/views/end";
import FontFaceObserver from "fontfaceobserver";
import { ToastContainer } from "react-toastify";
import { ImageCacheInstance } from "./ImageCache";
/** image assets */
import EndCoronaVirusLogo from "./assets/PNG/ecvlogo.png";
import GameLogo from "./assets/SVG/gamelogo.svg";
import IconForGenghisCannot from "./assets/SVG/IconForGenghisCannot.svg";
import ButtonSneaky from "./assets/PNG/Psst2.png";
import ButtonSneakySVG_alt from "./assets/PNG/psst_data.png";
import lockdownCoin from "./assets/SVG/coin-lockdown.svg";
import medicalCoin from "./assets/SVG/coin-medical.svg";
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
  const [sourceToView, setSourceToView] = useState<SourceDetails>({
    sourceName: "",
    link: "",
    description: "",
  });

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

  const endings: Record<string, { ele: JSX.Element; bg: string }> = {
    GenghisCannot: {
      ele: <LeaderStyle.GenghisCannot onClickSource={showSource} />,
      bg: "bg-yellow-400",
    },
    FlipFlopper: {
      ele: <LeaderStyle.FlipFlopper onClickSource={showSource} />,
      bg: "bg-red-200",
    },
    CovidTerminator: {
      ele: <LeaderStyle.CovidTerminator onClickSource={showSource} />,
      bg: "bg-green-400",
    },
    BusinessGuru: {
      ele: <LeaderStyle.BusinessGuru onClickSource={showSource} />,
      bg: "bg-blue-400",
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
      setEnding(playerChoice.ending);
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
          onClickContinue={() => {
            show("event");
          }}
          onClickSource={showSource}
        />
      );

    // Event screens
    case "event":
      return (
        <EventScreen
          event={event}
          onClickResponse={processPlayerChoice}
          onClickExtraInfo={() => show("eventExtra")}
        />
      );
    case "eventExtra":
      return (
        <EventExtra
          event={event}
          onClickSource={showSource}
          onClickBack={() => show("event")}
        />
      );

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
          onClickContinue={() => (ending ? show("end") : show("event"))}
          onClickExtra={() => show("feedbackExtra")}
          onClickSource={showSource}
        />
      );
    case "feedbackExtra":
      return (
        <FeedbackExtra
          response={getLastResponse()}
          onClickBack={() => show("feedback2")}
          onClickSource={showSource}
        />
      );

    // End show
    case "end":
      return (
        <Ending
          leaderStyle={endings[ending]}
          onClick={() => {
            show("allEndings");
          }}
        />
      );
    case "allEndings":
      return (
        <AllEndings
          onClick={(name: string) => {
            setEnding(name);
            show("viewEnding");
          }}
          onReplay={reset}
        />
      );
    case "viewEnding":
      return (
        <ViewEnding
          leaderStyle={endings[ending]}
          onClick={() => {
            show("allEndings");
          }}
        />
      );
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
    ImageCacheInstance.read(IconForGenghisCannot),
    ImageCacheInstance.read(ButtonSneaky),
    ImageCacheInstance.read(ButtonSneakySVG_alt),
    ImageCacheInstance.read(lockdownCoin),
    ImageCacheInstance.read(medicalCoin),
    /*ImageCacheInstance.read(
      `https://media.giphy.com/media/gGaEm6jMNs98JuWiPv/giphy.gif`
    ), - 6MB asset!!!*/
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

  useEffect(() => {
    preloadAssets()
      .catch((err) => {
        console.error(err);
        setReady(true);
      })
      .then(() => {
        console.log("RESOURCES READY");
        setReady(true);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      {ready ? <GameLoop /> : <Loading />}
    </>
  );
};

export default App;
