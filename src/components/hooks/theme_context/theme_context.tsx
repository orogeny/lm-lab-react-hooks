import { PropsWithChildren, createContext, useState } from "react";
import useToggle from "../../../extension_exercises/use_toggle";

type Theme = {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
};

type ThemeProvType = {
  theme: Theme;
  toggleTheme: () => void;
};

const pickTheme = (dark: boolean) => ({
  backgroundColor: dark ? "#333" : "#CCC",
  color: dark ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
});

const ThemeContext = createContext<ThemeProvType | undefined>(undefined);

function ThemeProvider({ children }: PropsWithChildren) {
  const [isDarkTheme, toggleTheme] = useToggle(true);

  const theme = pickTheme(isDarkTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
