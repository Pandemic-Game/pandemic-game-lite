import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngry, faHandSpock, faLaughSquint, faRetweet, faSurprise, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ResponseItem } from "../model/Response";
import React from "react";
import { Img } from "../ImageCache";
import * as Txt from "./text";

export function Tweet(props: { fb: ResponseItem; delay: number }) {
  return (
    <div
      className='max-w-2xl p-3 m-2 flex flex-col items-start relative bg-white rounded-xl	animate__animated animate__bounceIn'
      style={{ animationDelay: `${props.delay}s` }}
    >      
      <div className={`flex flex-row text-left ${Txt.textSize('lg')} `}>
        <FontAwesomeIcon icon={faTwitter} color="dodgerblue" size="lg" />
        <h5 className={`pl-1 text-blue-500`}> {props.fb.head} </h5>
      </div>
      <p className={`pt-1 m-auto text-light ${Txt.textSize('lg')} `} style={{ fontFamily: "helvetica" }}>
        {props.fb.content}
        <small className='p-2 flex justify-end items-center'>
          <FontAwesomeIcon icon={faThumbsUp} className='m-1' color="dodgerblue" />
          {(Math.random()*300).toFixed(0)}
          <FontAwesomeIcon icon={faRetweet} className='m-1' color="lightblue" />
          {(Math.random()*100).toFixed(0)}
        </small>
      </p>
      
    </div>
  );
}

export function News(props: { fb: ResponseItem; delay: number }) {
  return (
    <div
      className='max-w-2xl p-3 m-2 flex flex-col justify-center items-start relative bg-white rounded-xl animate__animated animate__bounceIn'
      style={{ animationDelay: `${props.delay}s` }}
    >
      <p
        className={`text-left ${Txt.textSize('lg')} font-medium`}
        style={{ fontFamily: "Playfair Display" }}
      >
        {props.fb.content}
      </p>
      <p className={`text-left ${Txt.textSize('base')} `}> - {props.fb.head} (headline) </p>
      <div className='p-2 flex justify-end items-center self-end'>
          <FontAwesomeIcon icon={faThumbsUp} className='m-1' color="dodgerblue" />
          {(Math.random()*600).toFixed(0)}
          <FontAwesomeIcon icon={faSurprise} className='m-1' color="gold" />
          {(Math.random()*100).toFixed(0)}
          <FontAwesomeIcon icon={faAngry} className='m-1' color="red" />
          {(Math.random()*100).toFixed(0)}
        </div>
    </div>
  );
}

export function Meme(props: { fb: ResponseItem; delay: number }) {
  return (
    <div
      className='max-w-2xl p-3 pt-1 m-2 flex flex-col justify-center items-center relative bg-white rounded-xl animate__animated animate__bounceIn'
      style={{ animationDelay: `${props.delay}s` }}
    >
      <p className={`p-2 text-light ${Txt.textSize('lg')} `} style={{ fontFamily: "Impact" }}>
        {props.fb.head}
      </p>
      <Img src={props.fb.content} className="h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60 w-auto rounded-xl" alt="Meme reaction" />
      <div className='p-2 flex items-center'>
        <FontAwesomeIcon icon={faThumbsUp} className='m-1' color="dodgerblue" size="lg" />
        { (Math.random()*200).toFixed(0)}
        <FontAwesomeIcon icon={faLaughSquint} className='m-1' color="gold" size="lg" />
        {(Math.random()*100).toFixed(0)}
      </div>
    </div>
  );
}
