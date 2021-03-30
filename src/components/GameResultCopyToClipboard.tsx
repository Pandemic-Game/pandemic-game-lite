import React from "react";
import { Text } from "./text";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Rounded } from "./buttons";

interface Props {
  btnLabel: string;
  textToCopy: string;
  bg: string;
  col: string;
  showText: boolean;
}

export const EndResultCopyToClipboard: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.showText && <Text col="black" value={props.textToCopy} />}
      <CopyToClipboard
        text={props.textToCopy}
        onCopy={() => {
          toast.success("Copied to clipboard");
        }}
      >
        <Rounded bg={props.bg} col={props.col} value={props.btnLabel} />
      </CopyToClipboard>
    </>
  );
};
