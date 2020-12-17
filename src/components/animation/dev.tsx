import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import DevSVG from "../../assets/svg/dev.svg";
import { $, toggleSVGThemeColor } from "../../utils/dom";

const SVGDiv = styled(DevSVG)`
  width: 100%;
  height: 100%;
  margin: 0;
  * {
    transition: fill 0.25s ease-in-out;
  }
`;

const SVGElementSelectors = [
  "#ade8c9af-7e2e-4eda-b5c8-b06129257226 > rect:nth-child(26)",
  "#ade8c9af-7e2e-4eda-b5c8-b06129257226 > path:nth-child(3)",
  "#ade8c9af-7e2e-4eda-b5c8-b06129257226 > circle:nth-child(27)",
  "#ade8c9af-7e2e-4eda-b5c8-b06129257226 > circle:nth-child(28)",
  "#ade8c9af-7e2e-4eda-b5c8-b06129257226 > circle:nth-child(29)",
];

const DevAnimation = (props: Obj): React.ReactElement => {
  useEffect(() => {
    toggleSVGThemeColor(SVGElementSelectors, props.theme as ThemeObj);
  });
  return (
    <div>
      <SVGDiv />
    </div>
  );
};

export default withTheme(DevAnimation);
