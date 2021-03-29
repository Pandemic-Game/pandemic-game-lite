import React, { useEffect } from "react";
import { useThemeContext } from "../../ThemeProvider";
import * as Btn from "../buttons";
import { EndResultCopyToClipboard } from "../GameResultCopyToClipboard";
import * as Txt from "../text";

export function Ending(props: {
  leaderStyle: { ele: JSX.Element; bg: string };
  onClick: Function;
}) {
  const context = useThemeContext();

  useEffect(() => {
    context.changeBgColorClass(props.leaderStyle.bg);
  });

  return (
    <div
      className={`p-2 flex flex-col justify-between items-center bg-${props.leaderStyle.bg}`}
    >
      <Txt.ProphecyTitle value={"The end."} col="black" />
      <Txt.ProphecySubTitle value={"You achieved the ending:"} col="black" />
      <Btn.Rounded
        value="Open back up safely!"
        bg="yellow-600"
        class="animate__animated animate__tada"
        disabled={false}
      />

      <EndResultCopyToClipboard
        col="white"
        bg="yellow-600"
        btnLabel="Share"
        textToCopy="Play OutBreak the game: https://outbtreak.endcoronavirus.org"
        showText={false}
      />

      {props.leaderStyle.ele}
      <Btn.Bouncy
        col={"white"}
        bg={"yellow-600"}
        value={"See what everyone else got"}
        onClick={() => {
          props.onClick();
        }}
      />
    </div>
  );
}

export function ViewEnding(props: {
  leaderStyle: { ele: JSX.Element; bg: string };
  onClick: Function;
}) {
  const context = useThemeContext();

  useEffect(() => {
    console.log("Setting bg for: ", props.leaderStyle);
    context.changeBgColorClass(props.leaderStyle.bg);
  });

  return (
    <div
      className={`min-h-full p-2 flex flex-col justify-between items-center bg-${props.leaderStyle.bg}`}
    >
      {props.leaderStyle.ele}
      <Btn.Bouncy
        value={"Back"}
        onClick={() => {
          props.onClick();
        }}
      />
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
      <div className="p-2 flex flex-col justify-between items-center ">
        <Txt.Subtitle value="Find out about the other" col="black" />
        <Txt.Title value="Endings:" col="black" />
      </div>

      <div className="w-full p-2 m-2 flex flex-col justify-center items-center rounded-lg bg-yellow-300">
        <Txt.SectionTitle value="The reactionaries:" col="gray-700" />

        <div className="max-w-xs p-2 m-2 flex flex-col justify-center items-center">
          <Btn.Rounded
            bg="red-500"
            col="white"
            value={"Flip-flopper"}
            onClick={() => {
              props.onClick("FlipFlopper");
            }}
          />
          <p className="font-custom text-xl m-2">
            1 in 4 people are Flip-Floppers (25%)
          </p>
          <Txt.Text
            value="Flip-floppers try to please everyone and end up pleasing no-one."
            col="black"
          />
        </div>
        <div className="max-w-xs p-2 m-2 flex flex-col justify-center items-center">
          <Btn.Rounded
            bg="yellow-600"
            col="white"
            value={"Genghis Cannot"}
            onClick={() => {
              props.onClick("GenghisCannot");
            }}
          />
          <p className="font-custom text-xl m-2">
            1 in 10 people are Ghenghis Cannots (10%)
          </p>
          <Txt.Text
            value="Once Gheghis Cannots make a choice they do not listen to new evidence."
            col="black"
          />
        </div>
      </div>

      <div className="w-full p-2 m-2 flex flex-col justify-center items-center rounded-lg bg-green-400">
        <Txt.SectionTitle value="The forward-thinkers:" col="gray-700" />
        <div className="max-w-xs p-2 m-2 flex flex-col justify-center items-center">
          <Btn.Rounded
            bg="green-600"
            col="white"
            value={"COVID-Terminator"}
            onClick={() => {
              props.onClick("CovidTerminator");
            }}
          />
          <p className="font-custom text-xl m-2">
            1 in 5 people are COVID-Terminators (20%)
          </p>
          <Txt.Text
            value="COVID terminators seek to achieve a zero-covid world by implementing strict lockdowns."
            col="black"
          />
        </div>
        <div className="max-w-xs p-2 m-2 flex flex-col justify-center items-center">
          <Btn.Rounded
            bg="blue-500"
            col="white"
            value={"Business Guru"}
            onClick={() => {
              props.onClick("BusinessGuru");
            }}
          />
          <p className="font-custom text-xl m-2">
            1 in 2 people are Business Gurus (45%)
          </p>
          <Txt.Text
            value="Business Gurus deal first with COVID so that businesses can open up."
            col="black"
          />
        </div>
      </div>

      <div className="max-w-xs p-2 m-2 flex flex-col justify-center items-center">
        <Txt.Subtitle value="How do we calculate these?" col="black" />
        <Txt.Text
          value="We showed you a scenario where you could have responded in different ways. Your responses have consequences later down the line, like a story tree."
          col="black"
        />
      </div>

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
