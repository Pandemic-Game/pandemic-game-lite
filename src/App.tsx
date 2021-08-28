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
import { Endings } from "./assets/endings";
import { Tweet, News, Meme } from "./components/socialFeedback";
import { Splash, Introduction, Data } from "./components/views/start";
import { SourceScreen, ExplanationScreen } from "./components/views/source";
import {
  EventScreen,
  EventExtra,
  EventResponse,
} from "./components/views/event";
import { Information } from "./components/views/feedback";
import { End, AllEndings, EndLeaderStyle } from "./components/views/end";
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
import { faSave } from "@fortawesome/free-solid-svg-icons";

// Load story
const firstEvent = Story.evt_0_0;

// Init run once variables
const mobileCheck = () => {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
  return check.toString();
};
const sessionID:string = `session_${Math.random()}`;
const isMobile:string = mobileCheck();


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
  const [preferences, setPreferences] = useState<'recommended' | 'all'>('recommended');
  const [condition, setCondition] = useState<'science' | 'social'>('science');

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
    dataCollectorContext.dataCollector.sendSourceClickEventSignal(src);
    show("sources");
  };

  const showExplanation = (src: SourceDetails) => {
    setSourceToView(src);
    show("explanation");
  };

  const getLastResponse = (): Response =>
    cloneDeep(history[history.length - 1]);

  const getIndicatorsLastMonth = (): Indicators =>
    history.length === 1
      ? initialScenario
      : cloneDeep(history[history.length - 2].updatedIndicators);

  // Load endings
  const endings = Endings(showSource);

  // Applies the response and advances to the next turn
  const processPlayerChoice = (playerChoice: Response) => {
    setHistory(history.concat(playerChoice));
    dataCollectorContext.dataCollector.sendChoiceClickEventSignal({
      label: playerChoice.label,
      updatedIndicators: playerChoice.updatedIndicators,
    });
    // Show new event or if at end show ending
    if (playerChoice.ending) {
      setDelayUntilOpening(playerChoice.updatedIndicators.newCases * 5);
      setEnding(playerChoice.ending);
      setTimeout(function () {
        setCanOpenAllRestrictions(true);
      }, playerChoice.updatedIndicators.newCases * 5000);
    } else {
      setEvent(playerChoice.getNextEvent());
    }
    // Show feedback for choice
    show("event");
  };

  // Show feedback
  const getSocialFeedback = (feedback: ResponseItem[]): JSX.Element => {
    const feed: JSX.Element[] = [];
    function constructElement(it: ResponseItem, i: number) {
      switch (it.type) {
        case "tweet":
          feed.push( <Tweet fb={it} delay={Math.sqrt(i)} /> );
          break;
        case "meme":
          feed.push( <Meme fb={it} delay={Math.sqrt(i)} /> );
          break;
        case "article":
          feed.push( <News fb={it} delay={Math.sqrt(i)} /> );
          break;
      }
    }
    for (let i = 0; i < feedback.length; i++) {
      constructElement(feedback[i], i+1)
    }
    return (
      <div className="max-w-full w-full p-2 m-2 flex flex-col justify-center items-center ">
        {feed}
      </div>
    );
  };

  // Reset game
  const reset = () => {
    window.location.reload();
  };

  // Log to database
  const save = (idOfButtonPressed:string) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
    };
    const URL = 'https://www.morenostok.io/outbreak_research_edition.php?';
    const session = `sessionID=${sessionID}`;
    const eventID = `eventID=${event.title.replace(/\s/g, '_')}`;
    const button = `button=${idOfButtonPressed}`;
    const mobile = `mobile=${isMobile}`;
    const cond = `cond=${condition}`;
    xhttp.open("GET", URL.concat(session, '&', eventID, '&', button, '&', mobile, '&', cond), true);
    xhttp.send();
  }

  // Game mode selection
  switch (view) {
    // Intro screens
    case "start":
      return (
        <Splash
          onClick={() => {
            show("introduction");
            save('start');
          }}
          setCondition={(cond: 'social' | 'science') => {
            setCondition(cond);
          }}
        />
      );
    case "introduction":
      return (
        <Introduction
          onClick={{
            continue: () => {
              show("event");
              save('start_dismissIntro');
            },
            source: showSource,
            data: () => {
              show("data");
            },
          }}
        />
      );
    case "data":
      return (
        <Data
          onClick={{
            back: () => show("introduction"),
            source: showSource,
          }}
        />
      );

    // Event screens
    case "event":
      return <EventScreen 
        event={event} 
        onClick={{
          consult: () => {
            show("feedback1");
            save('event_showInfo');
          }
        }} 
      />;
    case "eventExtra": // UNUSED
      return (
        <EventExtra
          event={event}
          onClickSource={showSource}
          onClickBack={() => show("eventResponse")}
        />
      );
    case "eventResponse":
      return <EventResponse 
        condition={condition}
        event={event} 
        onClick={(response: Response)=>{
          save(`response_${response.label.replace(/\s/g, '_')}`);
          processPlayerChoice(response);
        }}
      />;

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
        <Information
          condition={condition}
          event={event}
          feedItems={getSocialFeedback(event.response1.socialMediaResponse)}
          preferences={preferences}
          onClick={{
            extraInfo: (value: 'recommended' | 'all') => {
              save('event_togglePreferences');
              setPreferences(value);
            },
            continue: () => {
              save('event_dismissInfo');
              if (ending) {
                dataCollectorContext.dataCollector.sendGameEndSignal(ending);
                show("end");
              } else {
                setPreferences('recommended');
                show("eventResponse");
              }
            }
          }}
        />
      );
    case "feedback2":
      return <>Error: Called unused component (feedback2)</>;

    // End show
    case "end":
      const state = () => {
        save('end_ending');
        if (openAllRestrictions) {
          return "opened";
        } else if (canOpenAllRestrictions) {
          return "enabled";
        } else {
          return "disabled";
        }
      };
      return (
        <End
          ending={endings[ending]}
          delay={delayUntilOpening}
          state={state()}
          onClick={{
            openButton: {
              disabled: function () {
                toast.success(`Can't open up yet, wait ${delayUntilOpening}s!`);
              },
              enabled: function () {
                setOpenAllRestrictions(true);
              },
              opened: function () {
                setView("leaderStyle");
              },
            },
            continue: function () {
              show("leaderStyle");
            },
            why: showExplanation,
          }}
        />
      );
    case "leaderStyle":
      save('end_allEndings');
      return (
        <EndLeaderStyle
          ending={endings[ending]}
          onClick={() => {
            show("allEndings");
          }}
        />
      );
    case "allEndings":
      return <AllEndings onReplay={reset} endings={endings} />;
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
    new FontFaceObserver("Open Sans").load(),
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
      `https://media.giphy.com/media/gGaEm6jMNs98JuWiPv/giphy-downsized.gif`
    ),
    ImageCacheInstance.read(
      `https://media.giphy.com/media/3o7TKCskhXtrq3nsBy/giphy.gif`
    ),
    ImageCacheInstance.read(
      `https://media.giphy.com/media/1BQdjXovIqSLS/giphy.gif`
    ),
    ImageCacheInstance.read(
      `https://media.giphy.com/media/1BQdjXovIqSLS/giphy.gif`
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
