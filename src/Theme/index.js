import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from "styled-components";

import { colors } from "./Colors";
import { fonts } from "./Fonts";
import { metrics } from "./Metrics";

const theme = {
    colors,
    fonts,
    metrics,
};

// initializing context
export const ThemeContext = createContext(theme);

// setting a helper function to use context
export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
    const [themeObj, setTheme] = useState(theme);
    return (
        <ThemeContext.Provider value={{ themeObj, setTheme }}>
            <ThemeProvider theme={themeObj}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}