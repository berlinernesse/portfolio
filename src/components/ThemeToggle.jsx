import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react";
import { useFetcher } from "react-router-dom";
import { cn } from "../lib/utils";

export const ThemeToggle =()=> {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=> {
        const storedTheme = localStorage.getItem("theme");

        if(storedTheme){
            const isDark = storedTheme === "dark";
            setIsDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        // if (isDarkMode) {
        //     document.documentElement.classList.add("dark");
        //     localStorage.setItem("theme", "light");
        //     setIsDarkMode(false)
        // } else {
        //     document.documentElement.classList.remove("dark");
        //     localStorage.setItem("theme", "dark");
        //     setIsDarkMode(true)
        // }

        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
        localStorage.setItem("theme", newTheme);
    };

    return(
        <button onClick={toggleTheme} className={cn("fixed sm:center-5 sm:right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-none"
        )}
        >
            {""}
            {isDarkMode ? (<Sun className="h-6 w-g text-orange-300"/> 
            ) : (
            <Moon className="h-6 w-g text-white-900"/>)}
        </button>
    ) 
}