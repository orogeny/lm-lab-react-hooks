import { PropsWithChildren } from "react";
import useThemeContext from "./use_theme_context";

function ThemeButton({ children }: PropsWithChildren) {
  const { toggleTheme } = useThemeContext();

  return <button onClick={toggleTheme}>{children}</button>;
}

export default ThemeButton;
