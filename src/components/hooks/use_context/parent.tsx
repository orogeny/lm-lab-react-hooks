import { createContext, useState } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

type ThemeProviderType = {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ThemeContext = createContext<ThemeProviderType>(undefined!);

const pickTheme = (dark: boolean) => ({
  backgroundColor: dark ? "#333" : "#CCC",
  color: dark ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
});

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={pickTheme(darkTheme)}>
      <div className="section">
        <h2>useContext</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child1 />
        <Child2 />
      </div>
    </ThemeContext.Provider>
  );
};
