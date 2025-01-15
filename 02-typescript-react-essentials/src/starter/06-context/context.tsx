import { useContext, createContext, useState } from "react";

type Theme = 'light' | 'dark' | 'system'

type ThemeProvider = {
    theme:Theme,
    setTheme: (theme:Theme)=>void
}

const themeProviderContext= createContext<ThemeProvider | undefined>(undefined)

type ThemeProviderProps = {
    children: React.ReactNode,
    defaultTheme?: Theme,
}

export const ThemeProvider = ({children, defaultTheme = 'system'}:ThemeProviderProps)=>{
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    return(
        <themeProviderContext.Provider value={{theme, setTheme}}>{children}</themeProviderContext.Provider>
    )
}

export const useTheme = ()=>{
    useContext(themeProviderContext)
}
