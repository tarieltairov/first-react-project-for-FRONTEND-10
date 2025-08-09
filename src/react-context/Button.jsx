import { useTheme } from "./ThemeContext";

export function Button() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Текущая тема: {theme}</button>;
}
