import Child1 from "./child1";
import Child2 from "./child2";
import ThemeButton from "./theme_button";
import { ThemeProvider } from "./theme_context";

function ThemedParent() {
  return (
    <ThemeProvider>
      <div className="section">
        <h2>Themed Context</h2>
        <ThemeButton>Toggle Theme</ThemeButton>
        <Child2 />
        <Child1 />
      </div>
    </ThemeProvider>
  );
}

export default ThemedParent;
