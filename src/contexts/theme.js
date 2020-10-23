import { createContext, useState, useEffect, useContext } from "react";

const localStorageKey = "theme";
const themeEnum = ["dark", "light"];

const themeContext = createContext({
  theme: "dark", // dark or light
});

const ThemeProvider = ({ children }) => {
  const [theme, _setTheme] = useState("light");

  const setTheme = (newTheme) => {
    if (themeEnum.some((t) => t === newTheme)) {
      _setTheme(newTheme);
    }
  };

  const toggleTheme = () =>
    _setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  // persist theme to localstorage
  useEffect(() => {
    document.querySelector("body").className = theme;
    if (theme) localStorage?.setItem(localStorageKey, theme);
  }, [theme]);

  // retrive theme from localstorage
  useEffect(() => {
    const persistedTheme = localStorage?.[localStorageKey];
    if (persistedTheme) _setTheme(persistedTheme);
  }, []);

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => {
  const themeContextValues = useContext(themeContext);
  return themeContextValues;
};

export { themeContext, ThemeProvider, themeEnum, useTheme };
