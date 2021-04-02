import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ResponseItem } from "../model/Response";
import React from "react";
import { Img } from "../ImageCache";
import * as Txt from "./text";

export function Tweet(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`max-w-2xl p-3 m-2 flex flex-col items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <div className={`flex flex-row text-left ${Txt.textSize('lg')} `}>
        <FontAwesomeIcon icon={faTwitter} color="dodgerblue" size="lg" />
        <h5 className={`pl-1 text-blue-500`}> {props.fb.head} </h5>
      </div>
      <p className={`pt-1 m-auto text-light ${Txt.textSize('lg')} `} style={{ fontFamily: "helvetica" }}>
        {props.fb.content}
      </p>
    </div>
  );
}

export function News(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`max-w-2xl p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <p
        className={`text-left ${Txt.textSize('lg')} font-medium`}
        style={{ fontFamily: "Playfair Display" }}
      >
        {props.fb.content}
      </p>
      <p className={`text-left ${Txt.textSize('base')} `}> - {props.fb.head} (headline) </p>
    </div>
  );
}

export function Meme(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`max-w-2xl p-3 pt-1 m-2 flex flex-col justify-center items-center relative bg-white rounded-xl ${props.animation}`}
    >
      <p className={`p-2 text-light ${Txt.textSize('lg')} `} style={{ fontFamily: "Impact" }}>
        {props.fb.head}
      </p>
      <Img src={props.fb.content} className="h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60 w-auto rounded-xl" alt="Meme reaction" />
    </div>
  );
}
