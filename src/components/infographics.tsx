import React from "react";
import * as Txt from "./text";
import medicalCoin from "../assets/SVG/coin-medical.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faCircle,
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
        style={{ width: `${100-props.n}%`, background: 'rgba(0,0,0,0.5)'}}
      >
        <Txt.Subtitle value={`Oppose lockdown`} col="white"/>
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
      className="m-2 w-full flex flex-col items-center rounded-xl bg-gray-700 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Title value={"Government polling:"} col={"white"} />
      <div className="flex flex-row items-center text-center justify-center">
        <Txt.Text value={
          `Many people don't support additional restrictions!`
        } col={"white"} />
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
        icon={faCircle}
        size="sm"
        color={"orangered"}
        className="m-1 animate__animated animate-fadeIn"
        style={{ animationDelay: `${props.animationDelay}s` }}
      />
    )
    default: return (
      <FontAwesomeIcon
        icon={faCircle}
        size="sm"
        color={"yellow"}
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
        animationDelay={props.delay + (i/10)}
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
      className="m-2 w-100 flex flex-col items-center text-white rounded-xl bg-green-600 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Text value='Health service report:' col='white'/>
      <Txt.Title value={getTitle()} col="white" />
      <div className="max-w-lg m-2 p-2 flex flex-col items-start animate__delay-1s animate__animated animate__fadeIn">
        <CaseCircles
          lockdown={props.newCases.lockdown}
          noLockdown={props.newCases.noLockdown}
          delay={delay}
        />
        <Txt.Text value={`Cases after lockdown: ${props.newCases.lockdown}`} col='white'/>
        <div className='p-1 rounded-full bg-red-500'>
          <Txt.Text value={`Cases with no lockdown: ${props.newCases.noLockdown}`} col='white'/>
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
      className="w-full m-2 p-2 flex flex-col items-center text-white rounded-xl bg-yellow-600 animate__animated animate__backInDown"
      style={{ animationDelay: `${props.delay}s` }}
    >
      <Txt.Text value='Economy report:' col='white'/>
      <Txt.Title 
        value={costOfNoLockdown > costOfLockdown ? 'Restrictions will save money' : 'Restrictions may save money'} 
        col="white" />
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <p className="p-2 text-lg font-medium text-center">Cost of lockdown*</p>
          <div className="">
            <Txt.Text
              value={`$${props.medicalCosts.lockdown} Billion`}
              col="white"
            />
          </div>
          <Img
            src={medicalCoin}
            style={{ height: calculateArea(props.medicalCosts.lockdown) }}
            alt="Costs with lockdown"
            className=""
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
          <p className="p-2 text-lg font-medium text-center">Cost of no lockdown</p>
          <div className="">
            <Txt.Text
              value={`${
                props.lockdownCosts.lockdown === 0
                  ? "Very little or none"
                  : `$${props.medicalCosts.noLockdown} Billion`
              } `}
              col="white"
            />
          </div>
          <Img
            src={medicalCoin}
            style={{ height: calculateArea(props.medicalCosts.noLockdown) }}
            alt="Medical costs without lockdown"
            className=""
          />
        </div>
      </div>
        <Txt.Text
            value={`*Medical costs only. Lockdown would also cost $${props.lockdownCosts.lockdown} Billion in lost business activity.`}
            col="white"
        />
    </div>
  );
}
