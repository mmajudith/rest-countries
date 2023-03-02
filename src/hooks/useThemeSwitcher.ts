import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
    const [ theme, setTheme ] = useState('light')

    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() =>{
        if(typeof window !== undefined){
            setTheme(localStorage.theme)    
        }  
    }, []);

    useEffect(() =>{
      
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if(typeof window !== undefined){
            localStorage.setItem("theme", theme)
        }

    }, [theme]);

    return [colorTheme, setTheme] as const
}