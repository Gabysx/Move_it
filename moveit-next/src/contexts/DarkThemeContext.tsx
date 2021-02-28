import { createContext, ReactNode, useEffect, useState } from 'react';

const defaultMode = 'dark';

interface DarkThemeContextData {
    defaultMode: string;
    toggle: () => void;

  
}

interface DarkThemeProviderProps { 
    children: ReactNode;
}

 export const DarkThemeContext = createContext({} as DarkThemeContextData)

 export function  DarkThemeProvider({ children }: DarkThemeProviderProps) {



    return (
        <DarkThemeContext.Provider value = {{
            defaultMode: defaultMode,
            toggle,
        }}>
            {children}
        </DarkThemeContext.Provider>
    )
}