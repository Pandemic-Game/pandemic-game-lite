import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ResponseItem } from "../model/Response";
import React from "react";
import { Img } from "../ImageCache";
import * as Txt from "./text";

export function Tweet(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`w-auto p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faTwitter} color="dodgerblue" size="lg" />
        <h5 className="pl-1 text-blue-500"> {props.fb.head} </h5>
      </div>
      <p className="p-2 text-light" style={{ fontFamily: "helvetica" }}>
        {props.fb.content}
      </p>
    </div>
  );
}

export function News(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`w-auto p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <p
        className={`text-left ${Txt.textSize('lg')} font-medium`}
        style={{ fontFamily: "Playfair Display" }}
      >
        {props.fb.content}
      </p>
      <h5 className="text-left"> - {props.fb.head} (headline) </h5>
    </div>
  );
}

export function Meme(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`w-auto p-3 pt-1 m-2 flex flex-col justify-center items-center relative bg-white rounded-xl ${props.animation}`}
    >
      <p className="p-2 text-light text-xl" style={{ fontFamily: "Impact" }}>
        {props.fb.head}
      </p>
      <Img src={props.fb.content} className="h-40 w-auto rounded-xl" alt="Meme reaction" />
    </div>
  );
}
