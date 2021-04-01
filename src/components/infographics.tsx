import React from "react";
import * as Txt from "./text";
import * as Btn from "./buttons";
import * as Lines from "./lines";
import { Indicators } from "../model/Indicators";
import { Response } from "../model/Response";
import lockdownCoin from "../assets/SVG/coin-lockdown.svg";
import medicalCoin from "../assets/SVG/coin-medical.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Img } from "../ImageCache";

// Public support
export function SupportBar(props: {
  indicators: Indicators;
  response: Response;
  onClickSource: Function;
  delay: number;
}) {
  const responseText =
    props.response.updatedIndicators.supportForLastResponse > 50
      ? "People liked that!"
      : "Ooh... People found that controversial!";
  const barWidth = {
    support: Math.max(
      props.response.updatedIndicators.supportForLastResponse,
      20
    ),
    opposition: Math.max(
      props.response.updatedIndicators.oppositionToLastResponse,
      20
    ),
  };
  return (
    <div
      className="m-2 w-full animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={"Public support"} col={"white"} />
      <div className="flex flex-row justify-center items-center">
        <Txt.Text value={responseText} col={"white"} />
        <Btn.ViewSource
          sourceDetails={props.response.sourceDetails}
          onClick={props.onClickSource}
        />
      </div>
      <div className="w-full p-2 flex flex-row justify-center items-center">
        <div
          className="h-full flex flex-row justify-center items-center text-center rounded-l-xl bg-green-500 z-20 overflow-visible"
          style={{ width: `${barWidth.support}%` }}
        >
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          <i className="fas fa-thumbs-up"></i>
          <Txt.Subtitle
            value={`${props.indicators.supportForLastResponse}%`}
            col="black"
          />
        </div>
        <div
          className="h-full flex flex-row justify-center items-center text-center bg-gray-50 z-10 overflow-visible"
          style={{ width: `${100 - barWidth.support - barWidth.opposition}%` }}
        >
          <Txt.Subtitle value={`.`} col="white" />
        </div>
        <div
          className="h-full flex flex-row justify-center items-center text-center rounded-r-xl bg-red-500 z-20 overflow-visible"
          style={{ width: `${barWidth.opposition}%` }}
        >
          <FontAwesomeIcon icon={faThumbsDown} size="lg" />
          <Txt.Subtitle
            value={`${props.indicators.oppositionToLastResponse}%`}
            col="black"
          />
        </div>
      </div>
    </div>
  );
}

// Cases
export function CaseCircle(props: {
  type: "increase" | "decrease" | "default";
  animationDelay: number;
}) {
  switch (props.type) {
    case "default":
      return (
        <FontAwesomeIcon
          icon={faCircle}
          size="sm"
          color={"yellow"}
          className="m-1"
        />
      );
    case "decrease":
      return (
        <FontAwesomeIcon
          icon={faCircle}
          size="sm"
          color={"yellow"}
          className="m-1 animate__animated animate__fadeOut"
          style={{ animationDelay: `${props.animationDelay}s` }}
        />
      );
    case "increase":
      return (
        <FontAwesomeIcon
          icon={faCircle}
          size="sm"
          color={"yellow"}
          className="m-1 animate__animated animate__fadeIn"
          style={{ animationDelay: `${props.animationDelay}s` }}
        />
      );
  }
}

function CaseCircles(props: {
  thisTurn: Indicators;
  lastTurn: Indicators;
  delay: number;
}) {
  const casesAreIncreasing = props.thisTurn.newCases > props.lastTurn.newCases;
  const circles: JSX.Element[] = [];

  // Animate in change in cases this turn
  if (casesAreIncreasing) {
    // If cases increasing
    for (let i = 0; i < props.lastTurn.newCases; i++) {
      circles.push(
        <CaseCircle key={`default-${i}`} type="default" animationDelay={0} />
      );
    }
    for (
      let i = 0;
      i < Math.max(0, props.thisTurn.newCases - props.lastTurn.newCases);
      i++
    ) {
      circles.push(
        <CaseCircle
          key={`increase-${i}`}
          type="increase"
          animationDelay={
            props.delay +
            (i / (props.thisTurn.newCases - props.lastTurn.newCases)) * 3
          }
        />
      );
    }
  } else {
    // If cases decreasing
    for (let i = 0; i < props.thisTurn.newCases; i++) {
      circles.push(
        <CaseCircle key={`default-${i}`} type="default" animationDelay={0} />
      );
    }
    for (
      let i = 0;
      i < Math.max(0, props.lastTurn.newCases - props.thisTurn.newCases);
      i++
    ) {
      circles.push(
        <CaseCircle
          key={`decrease-${i}`}
          type="decrease"
          animationDelay={
            props.delay +
            ((props.lastTurn.newCases - props.thisTurn.newCases - i) /
              props.lastTurn.newCases) *
              3
          }
        />
      );
    }
  }

  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      {circles}
    </div>
  );
}

export function CaseGraphic(props: {
  thisTurn: Indicators;
  lastTurn: Indicators;
  delay: number;
}) {
  const getTitle = () => {
    if(props.thisTurn.newCases === props.lastTurn.newCases){
      return "COVID-19 cases are still high!"
    } else if(props.thisTurn.newCases > props.lastTurn.newCases){
      return "COVID-19 cases are rising!"
    } else { 
      return "COVID-19 cases are falling"
    }
  }
  const delay = 2;
  return (
    <div
      className="m-2 w-100 flex flex-col justify-between items-center text-white animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={getTitle()} col="white" />
      <div className="m-2 p-2 flex flex-col justify-start items-start animate__delay-1s animate__animated animate__fadeIn">
        <em className="w-80">Total cases this month per 1000 people</em>
        <div className="w-auto flex flex-col justify-center items-start">
          <CaseCircles
            thisTurn={props.thisTurn}
            lastTurn={props.lastTurn}
            delay={delay}
          />
          <div className="w-full flex flex-row justify-start items-center"></div>
        </div>
        <div className="flex flex-col flex-wrap justify-start items-start">
          <p> Last month: {props.lastTurn.newCases} cases </p>
          <strong
            className="animate__animated animate__fadeIn"
            style={{ animationDelay: `${delay}s` }}
          >
            This month: {props.thisTurn.newCases} cases
          </strong>
        </div>
      </div>
    </div>
  );
}

// Economy
export function EconomyGraphic(props: {
  indicators: Indicators;
  delay: number;
}) {
  const getTitle = () =>
    props.indicators.medicalCosts > props.indicators.lockdownCosts
      ? "Medical costs are high!"
      : "Economy";
  const calculateArea = (value: number): number =>
    Math.sqrt((value * 100) / 3.14) * 2;
  return (
    <div
      className="m-2 w-full m-2 flex flex-col justify-center items-center text-white animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={getTitle()} col="white" />
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <p className="p-2 text-lg font-medium">Medical costs </p>
          <div className="">
            <Txt.Text
              value={`$${props.indicators.medicalCosts} Billion`}
              col="white"
            />
          </div>
          <Img
            src={medicalCoin}
            style={{ height: calculateArea(props.indicators.medicalCosts) }}
            alt="Medical costs"
            className=""
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          <p className="p-2 text-lg font-medium">Lost business activity</p>
          <div className="">
            <Txt.Text
              value={`${
                props.indicators.lockdownCosts === 0
                  ? "Very little or none"
                  : `$${props.indicators.lockdownCosts} Billion`
              } `}
              col="white"
            />
          </div>
          <Img
            src={lockdownCoin}
            style={{ height: calculateArea(props.indicators.lockdownCosts) }}
            alt="Lost business activity"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
