import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * container for applying theme colors
 * @param {object}{
 *   @param {string} main
 *   @param {string} second
 *   @param {string} third
 *   @param {string} font
 *   @param {React.ReactNode}
 * }
 */

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
