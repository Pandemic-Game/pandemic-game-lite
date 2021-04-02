import React, { useEffect } from "react";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import { EndResultCopyToClipboard } from "../GameResultCopyToClipboard";
import * as Txt from "../text";
import { Img } from "../../ImageCache";
import { Ending } from "../../model/Event";
import EndImgClosed from "../../assets/SVG/ending_restrictions.svg";
import EndImgOpened from "../../assets/SVG/ending_opened.svg";

export function End(props: {
  ending: Ending;
  delay: number;
  state: "enabled" | "disabled" | "opened";
  onClick: {
    openButton: {
      enabled: Function;
      disabled: Function;
      opened: Function;
    };
    continue: Function;
    why: Function;
  };
}) {
  const context = useThemeContext();
  useEffect(() => {
    context.changeBgColorClass(props.ending.bg);
  });
  const timeTilOpen =
    props.delay > 0
      ? `You can return to normality in ... ${props.delay} seconds!`
      : `You can return to normality now!`;

  return (
    <div className={`h-full p-2 flex flex-col items-center`}>
      <Txt.Subtitle value={"You reached the end"} col="black" />
      <div className="w-full flex-col animate__animated animate__bounceIn">
        <div className="flex justify-center">
          <Txt.Title value={"Your country:"} col="black" />
        </div>
        <Img
          className={`m-2 my-5 ${
            props.state === "opened" ? "animate__animated animate__tada" : ""
          }`}
          src={props.state === "opened" ? EndImgOpened : EndImgClosed}
          alt={"Covid-19 restrictions"}
        />
      </div>

      <div className="w-full flex flex-col text-center animate__animated animate__bounceIn animate__delay-1s">
        <Txt.Subtitle
          value={`${props.state === "opened" ? "Normality!" : timeTilOpen}`}
          col="black"
        />
        <Txt.Text value={props.ending.winDescription} col="black" />
        <br />
        <Btn.SafeOpening
          delay={props.delay - 1}
          onClick={() => {
            props.onClick.openButton[props.state]();
          }}
          state={props.state}
        />
      </div>
      <div
        className="animate__animated animate__bounceInRight animate__delay-3s"
        style={{ display: props.delay > 5 ? "flex" : "none" }}
      >
        <Btn.Rounded
          col={"white"}
          bg={"black"}
          value={"... or continue anyway"}
          onClick={() => {
            props.onClick.continue();
          }}
        />
      </div>
    </div>
  );
}

export function EndLeaderStyle(props: {
  ending: {
    ele: JSX.Element;
    bg: string;
    winTitle: string;
    winDescription: string;
  };
  onClick: Function;
}) {
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(props.ending.bg);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col justify-between items-center bg-${props.ending.bg}`}
    >
      <Txt.Title value="Your ending..." col="black" />
      <div className="animate__animated animate__bounceIn animate__delay-1s">
        {props.ending.ele}
      </div>
      <div className="flex flex-col justify-center align-center animate__animated animate__bounceIn animate__delay-2s">
        <Txt.Title value="Share" col="black" />
        <div className="flex flex-row justify-center align-center">
          <Btn.TwitterShare shareText="Can you end lockdown? Play OutBreak the game: https://outbreak.endcoronavirus.org" />

          <EndResultCopyToClipboard
            bg="yellow-600"
            col="black"
            btnLabel="Other (copy link)"
            textToCopy="Can you end lockdown? Play OutBreak the game: https://outbreak.endcoronavirus.org"
            showText={false}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col align-center text-center">
        <Txt.Subtitle value="and once you're done..." col="black" />
        <Btn.Rounded
          value={"View all endings!"}
          bg="yellow-600"
          col="black"
          onClick={() => {
            props.onClick();
          }}
        />
      </div>
    </div>
  );
}

export function AllEndings(props: {
  endings: Record<string, Ending>;
  onReplay: Function;
}) {
  const bgColorClass = "bg-yellow-500";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full flex flex-col items-center text-center ${bgColorClass}`}
    >
      <div className="max-w-xs flex flex-col justify-between items-center ">
        <Txt.Title value="All endings" col="black" />
        <Txt.Paragraph
          col="black"
          value={`
          We showed you a scenario where you could have responded in different ways. 
          Your responses had consequences later down the line, like a story tree.`}
        />
      </div>

      <div className={`m-4 rounded-xl ${props.endings.GenghisCannot.bg}`}>
        {props.endings.GenghisCannot.ele}
      </div>
      <div className={`m-4 rounded-xl ${props.endings.FlipFlopper.bg}`}>
        {props.endings.FlipFlopper.ele}
      </div>
      <div className={`m-4 rounded-xl ${props.endings.BusinessGuru.bg}`}>
        {props.endings.BusinessGuru.ele}
      </div>
      <div
        className={`m-4 mb-12 rounded-xl ${props.endings.CovidTerminator.bg}`}
      >
        {props.endings.CovidTerminator.ele}
      </div>

      <Btn.Bouncy
        value={"Play again"}
        bg={"purple-900"}
        col={"white"}
        onClick={() => {
          props.onReplay();
        }}
      />
    </div>
  );
}
