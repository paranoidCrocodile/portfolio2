import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeObjProps {
  main: string;
  second: string;
  third: string;
  background: string;
  backgroundSecond: string;
  fontLight: string;
  fontDark: string;
  isDark: boolean;
  children: React.ReactNode;
}

const lightTheme = {
  main: "#3498db",
  second: "#2980b9",
  third: "#205f8a",
  background: "#f7f7f7",
  backgroundSecond: "#fff",
  fontLight: "#fff",
  fontDark: "#000",
  isDark: false,
};

const darkTheme = {
  main: "#682e80",
  second: "#4e1566",
  third: "#3a094f",
  background: "#141414",
  backgroundSecond: "#242323",
  fontLight: "#fff",
  fontDark: "#000",
  isDark: true,
};

const Theme = ({
  main,
  second,
  third,
  background,
  backgroundSecond,
  fontLight,
  fontDark,
  isDark,
  children,
}: ThemeObjProps): React.ReactElement => {
  return (
    <ThemeProvider
      theme={{
        main,
        second,
        third,
        background,
        backgroundSecond,
        fontLight,
        fontDark,
        isDark,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
export default Theme;
export { lightTheme, darkTheme, ThemeObjProps };
