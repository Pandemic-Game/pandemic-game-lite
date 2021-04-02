import React from "react";
import { Text } from "./text";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  textToCopy: string;
  showText: boolean;
}

export const EndResultCopyToClipboard: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.showText && <Text col="black" value={props.textToCopy} />}
      <CopyToClipboard
        text={props.textToCopy}
        onCopy={() => {
          toast.success("Link copied to clipboard");
        }}
      >
        <button className="p-2 m-1 flex flex-row align-center justify-center text-center rounded-xl bg-green-600  text-white  text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
          <FontAwesomeIcon
            icon={faShareAlt}
            size="lg"
            className="animate-pulse"
          />
          <p className='m-auto pl-1 font-bold animate-pulse'>Other</p>
        </button>
      </CopyToClipboard>
    </>
  );
};
