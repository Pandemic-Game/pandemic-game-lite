import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SVGWannaSeeData from "../assets/SVG/sneaky-wannaSeeData.svg";
import SVGWannaSeeModel from "../assets/SVG/sneaky-wannaSeeModel.svg";
import { SourceDetails } from "../model/Event";
import { Img } from "../ImageCache";
import * as Txt from "./text";

// Primary button
export function Rounded(props: any) {
  return (
    <button
      className={`w-full m-2 p-4 rounded-full bg-${props.bg} ${Txt.textSize(
        "xl"
      )} text-${props.col} font-custom`}
      style={{ marginTop: "auto" }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export const Bouncy = (props: any) => {
  return (
    <button
      className={`w-full m-2 p-4 rounded-full bg-${props.bg} ${Txt.textSize(
        "xl"
      )} text-${props.col} font-custom animate-bounce`}
      style={{ marginTop: "auto" }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

// Extra info
export const Sneaky = (props: {
  onClick: Function;
  bg: string;
  col: string;
  type: "wannaSeeData" | "wannaSeeModel";
}) => {
  return (
    <button
      className={`w-full m-2 p-1 flex rounded-3xl bg-${props.bg} text-${
        props.col
      } ${Txt.textSize("2xl")} font-custom`}
      style={{ marginTop: "auto" }}
      onClick={() => {
        props.onClick();
      }}
    >
      <div className="flex flex-row">
        <Img
          className={`h-auto w-16 p-2`}
          src={
            props.type === "wannaSeeData" ? SVGWannaSeeData : SVGWannaSeeModel
          }
          alt="Detective sneaky question button - 'Psst wanna see some data / our data model?'"
        />
        <div className="flex flex-col justify-center align-center">
          <p className={`text-left ${Txt.textSize("lg")}`}>
            {props.type === "wannaSeeData"
              ? "PSST. I got some data."
              : "No, not that kind of model."}
          </p>
          <p className={`text-left ${Txt.textSize("base")}`}>
            {props.type === "wannaSeeData"
              ? "Click here and let's check it out."
              : "Click here to learn more."}
          </p>
        </div>
      </div>
    </button>
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
        className={`m-2 px-1 bg-red-500 rounded-xl text-white ${Txt.textSize(
          "base"
        )}`}
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
  state: "opened" | "disabled" | "enabled";
}) {
  const style = () => {
    switch (props.state) {
      case "disabled":
        return "bg-purple-700";
      case "enabled":
        return "bg-purple-900";
      case "opened":
        return "bg-yellow-600";
    }
  };
  return (
    <button
      className="w-full p-2 flex flex-col justify-center align-center"
      onClick={() => {
        props.onClick();
      }}
    >
      <div
        className={`overflow-hidden w-full m-auto rounded-full bg-purple-500 font-custom text-white text-center ${
          props.state === "enabled" ? "animate-bounce" : ""
        }`}
      >
        <div
          style={{
            animation: `grow ${props.delay}s linear forwards`,
          }}
          className={`${style()} ${Txt.textSize(
            "2xl"
          )} p-4 flex flex-col justify-center shadow-none whitespace-nowrap`}
        >
          {props.state === "opened" ? "See your ending" : "Return to normality"}
        </div>
      </div>
    </button>
  );
}

// twitter share
interface ShareProps {
  shareText: string;
}

export const TwitterShare: React.FC<ShareProps> = (
  props: ShareProps
) => {
  const urlEncodedText = encodeURI(props.shareText);
  const openShareLink = () => {
    window
      ?.open(
        `https://twitter.com/intent/tweet?text=${urlEncodedText}`,
        "_blank"
      )
      ?.focus();
  };

  return (
    <div>
      <button
        className="p-2 m-1 rounded-xl text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-black bg-blue-600 text-white"
        onClick={() => {
          openShareLink();
        }}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          className="animate-pulse"
        />
      </button>
    </div>
  );
};

export const MailShare: React.FC<ShareProps> = (
  props: ShareProps
) => {
  return (
    <a href="mailto:?subject=COVID19 OutBreak Game&amp;body=Check out OutBreak the game: https://outbreak.endcoronavirus.org."
      title="Share by Email">
      <button className="p-2 m-1 rounded-xl text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-black  bg-red-500 text-white">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="lg"
          className="animate-pulse"
        />
      </button>
    </a>
  );
};

