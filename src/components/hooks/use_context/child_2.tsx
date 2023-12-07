import { useContext } from "react";
import { ThemeContext } from "./parent";

export const Child2 = () => {
  const theme = useContext(ThemeContext);

  return <div style={theme}>Child 2</div>;
};
