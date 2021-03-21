import React from "react";
import "./App.css";
import { useThemeContext } from "./ThemeProvider";

export const Layout: React.FC<{}> = (props = {}) => {
    const context = useThemeContext()
    return <>
        <div className={`container-full flex min-h-full justify-center ${context.bgColorClass}`}>
            <div className="max-w-md">
                {props.children}
            </div>
        </div>
    </>
}
