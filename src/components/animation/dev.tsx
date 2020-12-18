import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import DevSVG from "../../assets/svg/dev.svg";
import gsap from "gsap";
import util from "../../utils/util";

const SVGDiv = styled(DevSVG)`
  width: 100%;
  height: 100%;
  margin: 0;
  * {
    transition: fill 0.25s ease-in-out;
  }
`;

const SVGID = "#ade8c9af-7e2e-4eda-b5c8-b06129257226";

const colorChangingParts = [
  "rect:nth-child(26)",
  "path:nth-child(3)",
  "circle:nth-child(27)",
  "circle:nth-child(28)",
  "circle:nth-child(29)",
];

const movingParts = [
  "path:nth-child(18)",
  "path:nth-child(6)",
  "circle:nth-child(16)",
  "path:nth-child(21)",
];

const DevAnimation = (props: Obj): React.ReactElement => {
  useEffect(() => {
    const { main } = props.theme as ThemeObj;
    util.animateEach({
      elems: util.multi$(SVGID, colorChangingParts, ">") as DOMSVGElement[],
      fromTos: [[{}, { fill: main, duration: 0 }]],
      tweenFunc: gsap.fromTo,
    });
    util.animateEach({
      elems: util.multi$(SVGID, movingParts, ">") as DOMSVGElement[],
      fromTos: [
        [{}, {}],
        [{}, {}],
        [{}, {}],
        [{}, {}],
      ],
      tweenFunc: gsap.fromTo,
    });
  });
  return <SVGDiv />;
};

export default withTheme(DevAnimation);
