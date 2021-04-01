import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import SVGWannaSeeData from "../assets/SVG/sneaky-wannaSeeData.svg";
import SVGWannaSeeModel from "../assets/SVG/sneaky-wannaSeeModel.svg";
import { SourceDetails } from "../model/Event";
import { Img } from "../ImageCache";
import * as Txt from './text';

// Primary button
export function Rounded(props: any) {
  return (
    <button
      className={`m-2 p-3 w-full rounded-full bg-${props.bg} ${Txt.textSize(Txt.subtitleSize)} text-${props.col} font-custom animate-${props.animate} ${props.class}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}

export const Bouncy = (props: any) => {
  return (
    <button
      className={`m-2 p-3 rounded-full bg-${props.bg} ${Txt.textSize(Txt.subtitleSize)} text-${props.col} font-custom animate-bounce`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

// Extra info
export const Sneaky = (props: {onClick: Function, bg: string, type: 'wannaSeeData' | 'wannaSeeModel'}) => {
  return (
    <Img
      className={`h-auto w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-3xl bg-${props.bg}`}
      src={props.type==='wannaSeeData' ? SVGWannaSeeData : SVGWannaSeeModel}
      alt="Detective sneaky question button - 'Psst wanna see some data / our data model?'"
      onClick={props.onClick}
    />
  );
};

export const ViewSource = (props: {
  sourceDetails: SourceDetails;
  onClick: any;
}) => {
  if (props.sourceDetails.sourceName === ``) {
    return <></>;
  } else {
    return (
      <button
        className={`m-2 px-1 bg-red-500 rounded-xl text-white ${Txt.textSize('base')}`}
        onClick={() => {
          props.onClick(props.sourceDetails);
        }}
      >
        Why
        <FontAwesomeIcon
          icon={faQuestionCircle}
          size="lg"
          className="p-1 animate-pulse"
        />
      </button>
    );
  }
};

export function SafeOpening(props: {
  onClick: Function;
  delay: number;
  opened: boolean;
}) {
  return (
    <button 
      className='w-full'
      onClick={() => {
        props.onClick();
      }}
    >
      <div 
        className="relative pt-1"
      >
        <div 
          className={`overflow-hidden w-full mb-4 rounded-full bg-purple-500
            ${props.opened ? 'animate__animated animate__tada' : ''}`
          }
          style={{
            animation: `appear ${props.delay}s linear forwards`
          }}
        >
          <div 
            style={{
              animation: `grow ${props.delay}s linear forwards`,
            }}
            className={`shadow-none p-2 flex flex-col text-center whitespace-nowrap justify-center font-custom text-white ${Txt.textSize(Txt.subtitleSize)} bg-purple-900`}
          >
            Return to normality
          </div>
        </div>
      </div>
    </button>
  );
}
