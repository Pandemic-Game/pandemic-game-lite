import React, { useEffect } from "react";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import { EndResultCopyToClipboard } from "../GameResultCopyToClipboard";
import * as Txt from "../text";
import { Img } from "../../ImageCache";
import EndImgOpened from "../../assets/PNG/ending_open.png"
import EndImgClosed from "../../assets/PNG/ending_restrictions.png"
import * as LeaderStyle from "../leaderStyles";

export function Ending(props: {
  leaderStyle: { ele: JSX.Element; bg: string, winTitle: string, winDescription:string };
  delay: number;
  opened: boolean;
  canOpenAllRestrictions: boolean
  onClick: {
    openButton: {
      enabled: Function,
      disabled: Function
    },
    continue: Function
  }
}) {
  const context = useThemeContext();
  useEffect(() => {
    context.changeBgColorClass(props.leaderStyle.bg);
  });

  const onClickOpenButton = props.canOpenAllRestrictions ? props.onClick.openButton.enabled : props.onClick.openButton.disabled;

  return (
    <div
      className={`h-full p-2 flex flex-col justify-between items-center bg-yellow-500`}
    >
      <Txt.Subtitle value={'You reached the end'} col='black' />
      <Txt.Title value={props.leaderStyle.winTitle} col='black' />

      <div className='max-w-sm p-4 flex flex-col justify-center items-center'>
        <Txt.Text value={props.leaderStyle.winDescription} col='black' />
        <Img 
          className={`${props.opened ? 'animate__animated animate__tada' : ''}`}
          src={props.opened ? EndImgOpened : EndImgClosed} 
          alt={'Covid-19 restrictions'} 
        />
        <Btn.SafeOpening
          delay={props.delay}
          onClick={()=>{onClickOpenButton()}}
          opened={props.opened}
        />
        <Txt.Subtitle value={`You can press the button in... ${props.delay} seconds!`} col='black' />
        <Txt.Subtitle value={`(Five seconds for every case in 1000 last month)`} col='black' />
        <p 
          className='text-xl font-bold text-center' 
          style={{animation: `appear ${props.delay}s linear forwards`}}
        >
          You can now open up, click the button above!
        </p>
      </div>
      
      <div className='flex flex-col justify-center text-center align-center' style={{ marginTop: "auto" }}>
        <Txt.Text value='Feel free to continue... ' col='black'/>
        <Btn.Rounded
          col={"white"}
          bg={"yellow-600"}
          value={"See your leadership style"}
          onClick={() => {
            props.onClick.continue();
          }}
        />
      </div>
    </div>
  );
}

export function EndLeaderStyle(props: {
  leaderStyle: { ele: JSX.Element; bg: string, winTitle: string, winDescription:string };
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
      {props.leaderStyle.ele}
      <div className='flex flex-col justify-center align-center text-center'>
        <EndResultCopyToClipboard
          bg="yellow-500"
          col="black"
          btnLabel="Share"
          textToCopy="Can you end lockdown? Play OutBreak the game: https://outbtreak.endcoronavirus.org"
          showText={false}
        />
        <p className='text-xl text-center font-semibold'>* Copy link to clipboard!</p>
      </div>

      <div className='flex flex-col justify-center align-center'>
        <p className='text-xl text-center font-semibold'>and once you're done...</p>
        <Btn.Rounded
          value={"View all endings!"}
          bg="yellow-500"
          col='black'
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

      <div style={{ marginTop: "auto" }}>
        <Btn.Bouncy
          value={"Play again"}
          bg={"purple-900"}
          col={"white"}
          onClick={() => {
            props.onReplay();
          }}
        />
      </div>
    </div>
  );
}
