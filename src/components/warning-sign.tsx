import React, { CSSProperties } from "react";

const circleStyle = { height: "26px", width: "26px", fontWeight: "bold", textAlign: "center" } as CSSProperties;
export const WarningSign: React.FC = () => {
    return <div>
        <div className={'h-auto border-black border-2 rounded-full relative z-10'}
            style={circleStyle}>!</div>
        <div className={'h-auto border-black border-2 rounded-full relative z-0 animate-ping'}
            style={{ ...circleStyle, top: "-26px" }}></div>
    </div>
}