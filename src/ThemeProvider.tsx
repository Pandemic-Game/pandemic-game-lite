import React, { useContext, useState } from "react";

export interface ThemeContextProps {
    bgColorClass: string,
    changeBgColorClass: (newClass: string) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);
export const useThemeContext = () => useContext(ThemeContext);

interface Props {
    children: React.ReactNode;
    bgColorClass: string;
}

export const ThemeProvider: React.FC<Props> = (props: Props) => {
    const [bgColorClass, setBgColorClass] = useState(props.bgColorClass);
    const themeManager: ThemeContextProps = {
        bgColorClass: bgColorClass,
        changeBgColorClass: (newClass: string) => setBgColorClass(newClass)
    }
    return (
        <ThemeContext.Provider value={themeManager}>
            {props.children}
        </ThemeContext.Provider>
    );


}
