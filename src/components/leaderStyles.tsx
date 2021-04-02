import React from "react";
import * as Btn from "./buttons";
import * as Txt from "./text";
import * as Line from "./lines";
import { SourceDetails } from "../model/Event";
import { Img } from "../ImageCache";
import iconFlipflop from "../assets/SVG/icon-flipflop.svg";
import iconGenghis from "../assets/SVG/icon-genghis.svg";
import iconGuru from "../assets/SVG/icon-guru.svg";
import iconTerminator from "../assets/SVG/icon-terminator.svg";

const LeadershipStyle = (props: {
  name: string;
  example: {
    name: string;
    sourceDetails: SourceDetails;
  };
  icon: string;
  description: string;
  normalityEnding: string;
  values: {
    public: number;
    economy: number;
    healthcare: number;
  };
  style: {
    bg: string;
    col: string;
  };
  onClickSource: Function;
}) => {
  return (
    <div
      className={`min-h-full w-xs p-2 m-2 pb-0 mb-0 flex flex-col justify-center items-center text-${props.style.col} animate__animated animate__bounceIn`}
    >
      <Img 
        src={props.icon} 
        className='m-2'
        style={{ width: "25%" }} 
        alt="Ending icon" 
      />
      <div className='w-full flex flex-col'>
        <Txt.Title value={props.name} col="black" />
      </div>
      <div className='p-2 text-center'>
        <Txt.Subtitle value={`${props.normalityEnding}`} col='black'/>
        <Txt.Text value={props.description} col="black" />
      </div>
      <div className="max-w-xs mb-2 flex flex-row">
        <div className='p-2'>
          <Txt.Text value={`Similar to ${props.example.name}`} col="black" />
        </div>
        <Btn.ViewSource
          sourceDetails={props.example.sourceDetails}
          onClick={props.onClickSource}
        />
      </div>
      <Line.Hr my={0} col='black'/>
    </div>
  );
};

export function GenghisCannot(props: { onClickSource: Function }) {
  return (
    <LeadershipStyle
      name="Genghis Cannot"
      example={{
        name: "the USA",
        sourceDetails: {
          sourceName: "Their response to COVID-19",
          link: "https://www.bbc.co.uk/news/world-us-canada-52407177",
          description:
            "Former president Trump refused to lock down the USA in 2020.",
        },
      }}
      icon={iconGenghis}
      description={`Once Gheghis Cannots make a choice they stick with it no matter what.`}
      normalityEnding={`Slowest return to normality`}
      values={{ // Currently not used
        public: 75,
        economy: 20,
        healthcare: 10,
      }}
      style={{
        bg: "yellow-500",
        col: "black",
      }}
      onClickSource={props.onClickSource}
    />
  );
}

export function CovidTerminator(props: { onClickSource: Function }) {
  return (
    <LeadershipStyle
      name="Covid Terminator"
      example={{
        name: "New Zealand",
        sourceDetails: {
          sourceName: "Their response to COVID-19",
          link: "https://www.bbc.co.uk/news/world-asia-53274085",
          description:
            "Jacinda Ardern‘s tactic of locking New Zealand down early and closing borders resulted in comparatively lower cases and deaths in the country",
        },
      }}
      icon={iconTerminator}
      description={`COVID Terminators seek to achieve a zero-covid world by implementing severe but short-term restrictions.`}
      normalityEnding={`Fastest return to normality`}
      values={{
        public: 75,
        economy: 20,
        healthcare: 10,
      }}
      style={{
        bg: "yellow-500",
        col: "black",
      }}
      onClickSource={props.onClickSource}
    />
  );
}

export function BusinessGuru(props: { onClickSource: Function }) {
  return (
    <LeadershipStyle
      name="Business Guru"
      example={{
        name: "South Korea",
        sourceDetails: {
          sourceName: "Their response to COVID-19",
          link: "https://www.bbc.co.uk/news/world-asia-51836898",
          description:
            "Under Chung Sye-Kyun‘s leadership there were few COVID-19 cases so no lockdowns, roadblocks or restrictions of movement were put in place. Consequently, they are one of the only economies to grow, not shrink, during 2020. However, since COVID-19 was not eradicated cases are now on the rise.",
        },
      }}
      icon={iconGuru}
      description={`Business Gurus implement restrictions early so that businesses can open back up sooner, but do not entirely eliminate covid.`}
      normalityEnding={`Faster return to normality`}
      values={{
        public: 75,
        economy: 20,
        healthcare: 10,
      }}
      style={{
        bg: "yellow-500",
        col: "black",
      }}
      onClickSource={props.onClickSource}
    />
  );
}

export function FlipFlopper(props: { onClickSource: Function }) {
  return (
    <LeadershipStyle
      name="Flip-flopper"
      example={{
        name: "the UK",
        sourceDetails: {
          sourceName: "Their response to COVID-19",
          link:
            "https://www.theguardian.com/business/2021/jan/25/uk-response-covid-19-u-turns",
          description:
            'From delaying the initial lockdown to opening it up again with restrictions in place, the UK has been in and out of lockdowns ever since. Prime minister Boris Johnson has been ridiculed for his "flip-flopping" attitude to lockdown.',
        },
      }}
      icon={iconFlipflop}
      description={`Flip-floppers try to please everyone so they change their mind a lot... and end up pleasing no-one.`}
      normalityEnding={`Slow return to normality`}
      values={{
        public: 75,
        economy: 20,
        healthcare: 10,
      }}
      style={{
        bg: "yellow-500",
        col: "black",
      }}
      onClickSource={props.onClickSource}
    />
  );
}
