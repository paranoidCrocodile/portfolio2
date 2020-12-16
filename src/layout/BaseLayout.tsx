import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ThemeIcon from "../assets/svg/themeIcon.svg";
import "../style/reset.css";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const ThemeButton = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 1rem;
  left: 15px;
  z-index: 999;
  & > svg {
    fill: ${(props) =>
      props.theme.isDark ? props.theme.fontLight : props.theme.fontDark};
  }
`;

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 25px;
  }
  *{
    transition: color 0.25s ease-in-out;
  }
`;

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

const BaseLayout = ({ children }: BaseLayoutProps): React.ReactElement => {
  const preferDark = window.matchMedia("(prefers-color-scheme: dark").matches;
  const [themeBool, changeTheme] = useState(preferDark);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeBool ? darkTheme : lightTheme}>
        <ThemeButton onClick={(e) => changeTheme(!themeBool)}>
          <ThemeIcon />
        </ThemeButton>
        {children}
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
