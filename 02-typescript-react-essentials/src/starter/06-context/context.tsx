import { useContext, createContext, useState } from "react";

<<<<<<< HEAD
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
=======
type Theme = "light" | "dark" | "system";

type ThemeProvider = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const themeProviderContext = createContext<ThemeProvider | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <themeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeProviderContext);
  console.log(context)
  if (context === undefined)
    throw new Error(`useTheme must be within the themeProvider`);
  return context;
};
>>>>>>> 3214d0d (useReducer hook with typeScript)
