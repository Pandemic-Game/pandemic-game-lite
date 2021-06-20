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

const Bar = (props: {support: number; opposition: number}) => {
  const barWidth = {
    support: Math.max(
      props.support,
      25
    ),
    opposition: Math.max(
      props.opposition,
      25
    ),
  };
  return(
    <div className="w-full max-w-lg p-2 flex flex-row justify-center items-center">
      <div
        className="h-full flex flex-row justify-center items-center text-center rounded-l-xl text-green-900 bg-green-400 z-20 overflow-visible"
        style={{ width: `${barWidth.support}%` }}
      >
        <FontAwesomeIcon icon={faThumbsUp} size="lg" />
        <i className="fas fa-thumbs-up"></i>
        <Txt.Subtitle
          value={`${props.support}%`}
          col="green-900"
        />
      </div>
      <div
        className="h-full flex flex-row justify-center items-center text-center bg-gray-50 z-10 overflow-visible"
        style={{ width: `${100 - barWidth.support - barWidth.opposition}%` }}
      >
        <Txt.Subtitle value={`.`} col="white" />
      </div>
      <div
        className="h-full flex flex-row justify-center items-center text-center rounded-r-xl text-red-900 bg-red-400 z-20 overflow-visible"
        style={{ width: `${barWidth.opposition}%` }}
      >
        <FontAwesomeIcon icon={faThumbsDown} size="lg" />
        <Txt.Subtitle
          value={`${props.opposition}%`}
          col="red-900"
        />
      </div>
    </div>
  )
}

export function SupportBar(props: {
  indicators: Indicators;
  response: Response;
  onClickSource: Function;
  delay: number;
}) {
  const survey = (a:number):string => {
    if(a < 50){ return 'People are unhappy'}
    if(a === 50){ return 'People are mostly happy'}
    else{ return 'People are happy'}
  }
  const responseText:string = survey(props.response.updatedIndicators.supportForLastResponse);
  return (
    <div
      className="m-2 w-full flex flex-col items-center rounded-xl bg-gray-700 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={"The survey says.."} col={"white"} />
      <div className="flex flex-row items-center text-center justify-center">
        <Txt.Text value={responseText} col={"white"} />
      </div>
      <Bar 
        support={props.response.updatedIndicators.supportForLastResponse} 
        opposition={props.response.updatedIndicators.oppositionToLastResponse} 
      />
      <Txt.Text value={`${props.response.updatedIndicators.supportForLastResponse}% people agree with the response to the pandemic`} col='white' />
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
    if(props.thisTurn.newCases >= 90){
      return "Cases are still high!"
    }else if(props.thisTurn.newCases === 1){
      return "Cases are low"
    }else if(props.thisTurn.newCases === props.lastTurn.newCases){
      return "Cases are stable"
    } else if(props.thisTurn.newCases > props.lastTurn.newCases){
      return "Cases are rising!"
    } else { 
      return "Cases are falling"
    }
  }
  const delay = 2;
  return (
    <div
      className="m-2 w-100 flex flex-col items-center text-white rounded-xl bg-green-600 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={getTitle()} col="white" />
      <div className="max-w-lg m-2 p-2 flex flex-col items-start animate__delay-1s animate__animated animate__fadeIn">
        <Txt.SmallText value='Total cases this month per 1000 people' col='white' />
        <CaseCircles
          thisTurn={props.thisTurn}
          lastTurn={props.lastTurn}
          delay={delay}
        />
        <Txt.SmallText value={`Last month: ${props.lastTurn.newCases} cases`} col='white' />
        <div className="animate__animated animate__fadeIn"
          style={{ animationDelay: `${delay}s` }}
        >
          <Txt.SmallText value={`This month: ${props.thisTurn.newCases} cases`} col='white'/>
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
  const calculateArea = (value: number): number =>
    Math.sqrt((value * 100) / 3.14) * 2;
  return (
    <div
      className="w-full m-2 p-2 flex flex-col items-center text-white rounded-xl bg-yellow-600 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title 
        value={props.indicators.medicalCosts > props.indicators.lockdownCosts ? 'Restrictions are saving money' : 'Restrictions are costing money'} 
        col="white" />
      <p className='max-w-xs text-gray-900'>
        Restrictions save money when the costs of treating COVID-19 are higher than the cost of lost business activity
      </p>
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
