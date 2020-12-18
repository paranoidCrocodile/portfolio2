import { css } from "styled-components";

const alternateBackgroundSec = css`
  ${(props) => {
    const { backgroundSecond, fontLight, fontDark, isDark } = props.theme;
    return `
      background-color: ${backgroundSecond};
      color: ${isDark ? fontLight : fontDark};
    `;
  }}
`;

const alternateMain = css`
  ${(props) => {
    const { main, fontLight } = props.theme;
    return `
    background-color: ${main};
    color: ${fontLight};
  `;
  }}
`;

const alternateBorder = css`
  ${(props) =>
    props.theme.isDark ? `border: 1px ${props.theme.main} solid` : ``};
`;

const hoverable = css`
  transition: transform 0.25s ease-in-out, box-shadow, 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 14px 23px -4px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

const shadow = css`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const mixins = {
  alternateBackgroundSec,
  alternateMain,
  alternateBorder,
  hoverable,
  shadow,
};

export default mixins;
