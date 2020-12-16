import { css } from "styled-components";

const themedDiv = css`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  * {
    color: inherit;
    background-color: inherit;
  }
  ${(props) => {
    const { isDark, main, backgroundSecond, fontLight, fontDark } = props.theme;
    return isDark
      ? `
  background-color: ${backgroundSecond};
  border: 1px ${main} solid;
  color: ${fontLight};
  `
      : `
  background-color: ${backgroundSecond};
  color: ${fontDark};
  `;
  }}
`;

const themedDivBorderless = css`
  * {
    color: inherit;
    background-color: inherit;
  }
  ${(props) => {
    const { isDark, background, fontLight, fontDark } = props.theme;
    return isDark
      ? `
  background-color: ${background};
  color: ${fontLight};
  `
      : `
  background-color: ${background};
  color: ${fontDark};
  `;
  }}
`;

const hoverable = css`
  transition: transform 0.25s ease-in-out, box-shadow, 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 14px 23px -4px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

export { themedDiv, themedDivBorderless, hoverable };
