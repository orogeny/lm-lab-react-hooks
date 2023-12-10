import useThemeContext from "./use_theme_context";

function Child1() {
  const { theme } = useThemeContext();

  return <div style={theme}>Themed Child 1</div>;
}

export default Child1;
