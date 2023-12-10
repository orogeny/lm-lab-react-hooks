import useThemeContext from "./use_theme_context";

function Child2() {
  const { theme } = useThemeContext();

  return <div style={theme}>Themed Child 2</div>;
}

export default Child2;
