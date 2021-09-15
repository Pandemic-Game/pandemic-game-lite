import React, { useEffect } from "react";
import EndCoronaVirusLogo from "../../assets/PNG/ecvlogo.png";
import GameLogo from "../../assets/SVG/gamelogo.svg";
import pulseLogo from "../../assets/SVG/outbreak-pulse-logo.svg";
import intro1 from "../../assets/SVG/intro-1.svg";
import intro2 from "../../assets/SVG/intro-2.svg";
import intro3 from "../../assets/SVG/intro-3.svg";
import intro1b from "../../assets/SVG/intro-1b.svg";
import intro2b from "../../assets/SVG/intro-2b.svg";
import { Img } from "../../ImageCache";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import * as Txt from "../text";
import * as Lines from "../lines";

export function Splash(props: { onClick: Function; setCondition: Function }) {
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
            className="m-2 w-auto h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 rounded-lg"
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
          className="m-2 w-auto h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 2xl:h-52"
          Made
          with
          real
          models
        />
        <Txt.Subtitle
          value={"A five minute game for science."}
          col="black"
        />
      </div>
      
      <div className='mt-auto p-2 text-xl'>
        <Txt.Title value='Preview condition' col='black'/>
        <input type="radio" value="Science" name="condition" onClick={()=>{props.setCondition('science')}} checked/> Science<br/>
        <input type="radio" value="Social" name="condition" onClick={()=>{props.setCondition('social')}} /> Social<br/>
      </div>

      <Btn.Bouncy
        value="Play"
        bg="green-600"
        col="white"
        onClick={props.onClick}
      />
    </div>
  );
}

export function Introduction(props: {
  onClick: {
    continue: Function;
    source: Function;
    data: Function;
  };
}) {
  const bgColorClass = "bg-yellow-400";
  const context = useThemeContext();
  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div className={`min-h-full p-2 flex flex-col items-center text-center ${bgColorClass}`}>

      <Txt.Title value='How to play' col='black' />
      <div className='p-2'/>
      
      <Txt.Subtitle value={`Setting`} col='black' />
      <Txt.Text value={`
        You’re playing in the future. The earth has encountered a pandemic.
      `} col='black' />
      <div className='p-2'/>

      <Txt.Subtitle value={`How to play`} col='black' />
      <Txt.Text value={`
        You are a policy maker. Navigate events using information from the PULSE News feed.
      `} col='black' />
      <div className='p-2'/>

      <Txt.Subtitle value='What is PULSE?' col='black' />
      <button className='bg-green-600 p-3 rounded-full text-white font-medium' onClick={()=>{props.onClick.continue()}}>Click here to find out</button>
      
      <div></div>
    </div>
  );
}

export function Data(props: {
  onClick: {
    back: Function;
    source: Function;
  };
}) {
  const bgColorClass = "bg-green-600";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col justify-between items-center ${bgColorClass}`}
    >
      
      <div className='m-2 my-4 p-4 flex flex-col items-center rounded-xl bg-white'>
        <Img 
          className={`m-2 w-3/4`}
          src={pulseLogo}
          alt={'Pulse news feed'}
        />

        <Img className={`m-2 mt-3 w-5/6`} src={intro1} alt={'introduction infographic'}/>
        <Txt.Text value={`
          You’ll hear from your citizens and scientists directly, just like a Twitter feed.
        `} col='black' />

        <Lines.Hr my={2} col='gray-100'/>
        <Img className={`m-2 mt-3 w-5/6`} src={intro2} alt={'introduction infographic'}/>
        <Img className={`m-3 w-1/3`} src={intro2b} alt={'supporting infographic'}/>
        <Txt.Text value={`
          As soon as you make policy changes we’ll find out how people are responding
        `} col='black' />

        <Lines.Hr my={2} col='gray-100'/>
        <Img className={`m-2 mt-3 w-5/6`} src={intro3} alt={'introduction infographic'}/>
        <Txt.Text value={`
          We curate the feed to show you the most important stories of the month but if you want to see more at any time click the scroll down button:
        `} col='black' />
        <Btn.Dropdown
          preferences='all'
          onClick={()=>{}}
        />
        
        <Lines.Hr my={2} col='gray-100'/>
        <small className='text-gray-500'> Disclaimer: Not all news will be relevant! </small>
      </div>

      <Txt.Title value='You are now ready to play!' col='white'/>
      <Btn.Rounded
        value="Start the game!"
        bg="yellow-500"
        col="black"
        onClick={props.onClick.back}
      />
    </div>
  );
}
