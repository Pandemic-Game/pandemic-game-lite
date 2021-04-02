import React from "react";
import "./App.css";
import { useThemeContext } from "./ThemeProvider";

export const Layout: React.FC<{}> = (props = {}) => {
    const context = useThemeContext()
    return <>
        <div className={`container-full flex min-h-full justify-center ${context.bgColorClass}`}>
            <div className="max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                {props.children}
            </div>
        </div>
    </>
}
