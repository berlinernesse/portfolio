import { useState } from "react"
import { Moon, Sun } from "lucide-react";

export const ThemeToggle =()=> {
    const [isDarkMode, setIsDarkMode] = useState(false);


    return <button>
        {""}
        {isDarkMode ? 
        (<Sun className="h-6 w-g text-yellow-300"/> 
        ) : (
        <Moon className="h-6 w-g text-blue-900"/>
        )}
    </button>
}