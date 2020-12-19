import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeIcon from "../assets/svg/themeIcon.svg";
import Global from "../style/global";
import Reset from "../style/reset";

const ThemeButton = styled.div`
  position: fixed;
  height: 6rem;
  width: 6rem;
  transform: rotateZ(45deg);
  top: -4.3rem;
  left: -3rem;
  z-index: 999;
  transition: background-color 0.25s ease-in-out;
  background-color: ${(props) => props.theme.main};
  & > svg {
    position: relative;
    transform: translate(4.6rem, 3.6rem) rotate(-45deg);
    fill: ${(props) => props.theme.fontLight};
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

const BaseLayout = ({ children }: ComponentProps): React.ReactElement => {
  const preferDark = window.matchMedia("(prefers-color-scheme: dark").matches;
  const [themeBool, changeTheme] = useState(preferDark);
  return (
    <>
      <ThemeProvider theme={themeBool ? darkTheme : lightTheme}>
        <Global />
        <Reset />
        <ThemeButton onClick={(e) => changeTheme(!themeBool)}>
          <ThemeIcon />
        </ThemeButton>
        {children}
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
