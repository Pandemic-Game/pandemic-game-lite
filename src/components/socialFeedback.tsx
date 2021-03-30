import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughBeam, faAngry } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ResponseItem } from "../model/Response";
import React from "react";
import { Img } from "../ImageCache";

export function Tweet(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`w-auto p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <div className="absolute -top-2 -left-2 rounded-full bg-white">
        <FontAwesomeIcon
          icon={props.fb.isHappy ? faLaughBeam : faAngry}
          color={props.fb.isHappy ? "green" : "red"}
          size="lg"
        />
      </div>
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faTwitter} color="dodgerblue" size="lg" />
        <h5 className="text-blue-500"> {props.fb.head} </h5>
      </div>
      <p className="p-2 text-light">{props.fb.content}</p>
    </div>
  );
}

export function News(props: { fb: ResponseItem; animation: string }) {
  return (
    <div
      className={`w-auto p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl ${props.animation}`}
    >
      <div className="absolute -top-2 -left-2 rounded-full bg-white">
        <FontAwesomeIcon
          icon={props.fb.isHappy ? faLaughBeam : faAngry}
          color={props.fb.isHappy ? "green" : "red"}
          size="lg"
        />
      </div>
      <p
        className="text-left text-2xl font-medium"
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
      className={`w-auto p-3 m-2 flex flex-col justify-center items-center relative bg-white rounded-xl ${props.animation}`}
    >
      <div className="absolute -top-2 -left-2 rounded-full bg-white">
        <FontAwesomeIcon
          icon={props.fb.isHappy ? faLaughBeam : faAngry}
          color={props.fb.isHappy ? "green" : "red"}
          size="lg"
        />
      </div>
      <p className="p-2 text-light text-xl" style={{ fontFamily: "Impact" }}>
        {props.fb.head}
      </p>
      <Img src={props.fb.content} className="h-52 w-auto" alt="Meme reaction" />
    </div>
  );
}
