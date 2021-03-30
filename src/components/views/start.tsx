import React, { useEffect } from "react";
import EndCoronaVirusLogo from "../../assets/PNG/ecvlogo.png";
import GameLogo from "../../assets/SVG/gamelogo.svg";
import { Img } from "../../ImageCache";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import * as Txt from "../text";
import * as Line from "../lines";

export function Splash(props: { onClick: Function }) {
  const bgColorClass = "bg-yellow-400";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col items-center ${bgColorClass}`}
    >
      <div className="m-2">
        <a
          href="https://www.endcoronavirus.org"
          rel="noreferrer"
          target="_blank"
          className="text-blue-900"
        >
          <Img
            src={EndCoronaVirusLogo}
            alt="EndCoronaVirusLogo"
            className="m-2 w-auto h-14 rounded-lg"
          />
        </a>
      </div>
      <div
        className="m-2 flex m-2 flex-col justify-center text-center items-center"
        style={{ marginTop: "auto" }}
      >
        <Img
          src={GameLogo}
          alt="GameLogo"
          className="m-2 w-auto h-20 rounded-lg"
        />
        <Txt.Subtitle
          value={"A five minute game to end lockdown."}
          col="black"
        />
      <br></br>
      <Txt.Text value='How would you end COVID-19 lockdowns?' col='black' />
      <Txt.Text value='Lead your country, navigate the first few months of 2021 and find out.' col='black' />
      </div>
      <div style={{ marginTop: "auto" }}>
        <Btn.Bouncy
          value="Play the game"
          bg="purple-900"
          col="white"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export function Introduction(props: {
  onClickContinue: Function;
  onClickSource: Function;
}) {
  return (
    <div className="min-h-full p-2 flex flex-col justify-center items-center bg-yellow-400">
      <div className="flex flex-col justify-between items-center">
        <Txt.Subtitle value={"El presidente!"} col="black" />
        <Txt.Title value="How to play" col="gray-900" />
      </div>
      <div className="max-w-md p-6 flex flex-col justify-start items-start text-left list-disc m-2 font-sans animate__animated animate__fadeIn">
        <Txt.Subtitle value="Your goal" col="black" />
        <li className="p-2 pb-4">Be out of lockdown in 3 months time</li>
        <Txt.Subtitle value="Respond to events" col="black" />
        <li className="p-2 pb-0">Each month, you will encounter an event </li>
        <li className="p-2">
          You will have a limited choice of responses (you won't be able to
          change society all at once!){" "}
        </li>
        <Txt.Subtitle value="Be careful..." col="black" />
        <li className="p-2">
          One wrong step can put you in an out-of-control situation with no good
          choices available!{" "}
        </li>
      </div>
      <div className="max-w-xs m-auto mb-4 flex flex-col justify-center items-center">
        <Txt.Subtitle value={`Made with real data`} col="black" />
        <div className="flex flex-row justify-center items-center">
          <p className="text-center">
            (Press the red buttons if you don't believe us!)
          </p>
          <Btn.ViewSource
            onClick={props.onClickSource}
            sourceDetails={{
              sourceName: "Interactive data model",
              link:
                "http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com",
              description:
                "We are transparent with our data so that you can make your own conclusions from this game. These screens will show you our sources. For example, this game is heavily based on our previous model of how COVID-19 restrictions affect the economy and case count.",
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: "auto" }}>
        <Btn.Bouncy
          value="Start"
          bg="purple-900"
          col="white"
          onClick={props.onClickContinue}
        />
      </div>
    </div>
  );
}
