import React from "react";
import * as Txt from "./text";
import medicalCoin from "../assets/SVG/coin-medical.svg";
import lockdownCoin from "../assets/SVG/coin-lockdown.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faCircle,
  faAngleDoubleDown,
  faMinusCircle,
  faPlusCircle,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Img } from "../ImageCache";

// Public support
const Bar = (props: {n: number}) => {
  return(
    <div className="w-full max-w-lg p-2 flex flex-row justify-center items-center">
      <div
        className="h-full p-2 flex flex-row justify-center items-center text-center rounded-l-xl text-red-900 bg-red-400 z-20 overflow-visible"
        style={{ width: `${Math.max(props.n,25)}%`}}
      >
        <FontAwesomeIcon icon={faThumbsDown} size="lg" />
        <Txt.Subtitle
          value={`${props.n}%`}
          col="red-900"
        />
      </div>
      <div
        className="h-full p-2 flex flex-row justify-center items-center text-center rounded-r-xl z-20 overflow-visible"
        style={{ width: `${100-props.n}%`, background: 'rgba(0,0,0,0.8)'}}
      >
        <Txt.Subtitle value={`oppose lockdown`} col="white"/>
      </div>
    </div>
  )
}

export function SupportBar(props: {
  n: number;
  delay: number;
}) {
  return (
    <div
      className="m-2 mb-5 w-full flex flex-col items-center rounded-xl bg-white"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Subtitle value={"Government polling:"} col={"gray-800"} />
      <div className="flex flex-row items-center text-center justify-center">
        <Txt.Text value={
          `PROTEST RISK: Upto ${props.n}% of the population may PROTEST lockdown`
        } col={"gray-800"} />
      </div>
      <Bar n={props.n} />
    </div>
  );
}

// Cases
export function CaseCircle(props: {
  type: "increase" | "decrease" | "default";
  animationDelay: number;
}) {
  switch (props.type) {
    case "increase": return (
      <FontAwesomeIcon
        icon={faPlusCircle}
        size="sm"
        color={"red"}
        className="m-1 animate__animated animate__fadeIn"
        style={{ animationDelay: `${props.animationDelay}s` }}
      />
    )
    default: return (
      <FontAwesomeIcon
        icon={faCircle}
        size="sm"
        color={"black"}
        className="m-1"
      />
    )
  }
}

function CaseCircles(props: {
  lockdown: number;
  noLockdown: number;
  delay: number;
}) {
  const circles: JSX.Element[] = [];

  // Cases with restriction
  for (let i = 0; i < props.lockdown; i++) {
    circles.push(
      <CaseCircle key={`default-${i}`} type="default" animationDelay={0} />
    );
  }
  // Case increase without restriction
  for (
    let i = 0;
    i < Math.max(0, Math.abs(props.noLockdown - props.lockdown));
    i++
  ) {
    circles.push(
      <CaseCircle
        key={`increase-${i}`}
        type="increase"
        animationDelay={props.delay + (i/props.noLockdown)}
      />
    );
  }
  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      {circles}
    </div>
  );
}

export function CaseGraphic(props: {
  newCases:{
    lockdown: number;
    noLockdown: number;
  };
  delay: number;
}) {
  const getTitle = () => {
    if(props.newCases.noLockdown >= 90){
      return "EMERGENCY: Enact restrictions now"
    }else{
      return "Restrictions will reduce COVID-19 cases"
    }
  }
  const delay = 1.5;
  return (
    <div
      className="m-2 p-2 w-100 flex flex-col items-center text-white rounded-xl bg-white animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Text value='Projected cases' col='black'/>
      <Txt.Subtitle value={getTitle()} col="black" />
      <div className="max-w-lg m-2 p-2 flex flex-col items-start animate__delay-1s animate__animated animate__fadeIn">
        <CaseCircles
          lockdown={props.newCases.lockdown}
          noLockdown={props.newCases.noLockdown}
          delay={delay}
        />
        <p className="text-lg font-medium text-center text-black self-center">{`With restrictions: ${props.newCases.lockdown * 10}`}</p>
        <div className='flex flex-row self-center'>
          <p className="text-lg font-medium text-center text-red-500">{`Without restrictions: ${props.newCases.noLockdown * 10}`}</p>
          <FontAwesomeIcon icon={faAngleUp} color='red' className='animate__animated animate__delay-1s animate__fadeInUp animate__repeat-3' size="lg" />
        </div>
      </div>
    </div>
  );
}

// Economy
export function EconomyGraphic(props: {
  lockdownCosts:{
    lockdown: number;
    noLockdown: number; 
  }
  medicalCosts:{
    lockdown: number;
    noLockdown: number; 
  }
  delay: number;
}) {
  const calculateArea = (value: number): number =>
    Math.sqrt((value * 100) / 3.14) * 2;
  const costOfLockdown = props.lockdownCosts.lockdown + props.medicalCosts.lockdown;
  const costOfNoLockdown = props.lockdownCosts.noLockdown + props.medicalCosts.noLockdown;
  return (
    <div
      className="w-full m-2 p-2 flex flex-col items-center text-white rounded-xl bg-white animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Text value='Economy projection:' col='black'/>
      <Txt.Subtitle 
        value={costOfNoLockdown > costOfLockdown ? 'Restrictions will save money' : 'Restrictions may save money'} 
        col="black" />
      <div className="flex flex-row items-end text-black">
        <div className="flex flex-col items-center">
          <div className="">
            <Txt.Text
              value={`$${props.medicalCosts.lockdown} Billion`}
              col="black"
            />
          </div>
          <Img
            src={lockdownCoin}
            style={{ height: calculateArea(props.medicalCosts.lockdown) }}
            alt="With restrictions"
            className=""
          />
          <p className="p-2 text-lg font-medium text-center">With restrictions</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <Txt.Text
              value={`${
                props.lockdownCosts.lockdown === 0
                  ? "Very little or none"
                  : `$${props.medicalCosts.noLockdown} Billion`
              } `}
              col="red-500"
            />
          </div>
          <Img
            src={medicalCoin}
            style={{ height: calculateArea(props.medicalCosts.noLockdown) }}
            alt="Without restrictions"
            className=""
          />
          <p className="p-2 text-lg font-medium text-center text-red-500">Without restrictions</p>
        </div>
      </div>
      <small className='text-gray-600'>*Medical costs only. Lockdown would also cost ${props.lockdownCosts.lockdown} Billion in lost business activity.</small>
    </div>
  );
}
