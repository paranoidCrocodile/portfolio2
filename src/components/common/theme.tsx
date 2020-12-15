import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  main: string;
  second: string;
  third: string;
  font: string;
  children: React.ReactNode;
}

const Theme: React.ReactNode = ({
  main,
  second,
  third,
  font,
  children,
}: ThemeProps) => (
  <ThemeProvider theme={{ main, second, third, font }}>
    {children}
  </ThemeProvider>
);

export default Theme;
