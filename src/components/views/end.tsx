import React, { useEffect } from "react";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import { EndResultCopyToClipboard } from "../GameResultCopyToClipboard";
import * as Txt from "../text";
import { Img } from "../../ImageCache";
import EndImgClosed from "../../assets/SVG/ending_restrictions.svg";
import EndImgOpened from "../../assets/SVG/ending_opened.svg";
import * as LeaderStyle from "../leaderStyles";

export function Ending(props: {
  leaderStyle: {
    ele: JSX.Element;
    bg: string;
    winTitle: string;
    winDescription: string;
  };
  delay: number;
  opened: boolean;
  canOpenAllRestrictions: boolean;
  onClick: {
    openButton: {
      enabled: Function;
      disabled: Function;
    };
    continue: Function;
    why: Function;
  };
}) {
  const context = useThemeContext();
  useEffect(() => {
    context.changeBgColorClass(props.leaderStyle.bg);
  });

  const onClickOpenButton = props.canOpenAllRestrictions
    ? props.onClick.openButton.enabled
    : props.onClick.openButton.disabled;

  return (
    <div className={`h-full p-2 flex flex-col justify-between items-center`}>
      <Txt.Subtitle value={"You reached the end"} col="black" />
      <Txt.Title value={props.leaderStyle.winTitle} col="black" />

      <div className="max-w-sm p-4 flex flex-col justify-center items-center">
        <Txt.Text value={props.leaderStyle.winDescription} col="black" />
      </div>

      <Img
        className={`${props.opened ? "animate__animated animate__tada" : ""}`}
        src={props.opened ? EndImgOpened : EndImgClosed}
        alt={"Covid-19 restrictions"}
      />
      <div
        className="flex flex-row justify-center align-center"
        style={{ marginTop: "auto" }}
      >
        <Txt.Subtitle
          value={`You can return to normality in... ${props.delay} seconds!`}
          col="black"
        />
      </div>
      <Btn.SafeOpening
        delay={props.delay}
        onClick={() => {
          onClickOpenButton();
        }}
        opened={props.opened}
      />
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
  leaderStyle: {
    ele: JSX.Element;
    bg: string;
    winTitle: string;
    winDescription: string;
  };
  onClick: Function;
}) {
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(props.leaderStyle.bg);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col justify-between items-center bg-${props.leaderStyle.bg}`}
    >
      <Txt.Title value="Your ending..." col="black" />
      <div className="animate__animated animate__bounceIn animate__delay-1s">
        {props.leaderStyle.ele}
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

      <div className="mt-4 flex flex-col justify-center align-center">
        <p className="text-xl text-center font-semibold">
          and once you're done...
        </p>
        <Btn.Rounded
          value={"View all endings!"}
          bg="gray-200"
          col="black"
          onClick={() => {
            props.onClick();
          }}
        />
      </div>
    </div>
  );
}

export function AllEndings(props: { onClick: Function; onReplay: Function }) {
  const bgColorClass = "bg-yellow-500";
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(bgColorClass);
  });

  return (
    <div
      className={`min-h-full flex flex-col items-center text-center ${bgColorClass}`}
    >
      <div className="max-w-xs p-2 flex flex-col justify-between items-center ">
        <Txt.Title value="All leadership styles" col="black" />
        <Txt.Text
          value="We showed you a scenario where you could have responded in different ways. Your responses had consequences later down the line, like a story tree. Here are all the different endings..."
          col="black"
        />
      </div>

      <LeaderStyle.GenghisCannot onClickSource={props.onClick} />
      <LeaderStyle.FlipFlopper onClickSource={props.onClick} />
      <LeaderStyle.CovidTerminator onClickSource={props.onClick} />
      <LeaderStyle.BusinessGuru onClickSource={props.onClick} />

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
