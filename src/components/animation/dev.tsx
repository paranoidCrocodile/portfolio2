import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import gsap from "gsap";
import DevSVG from "../../assets/svg/dev.svg";
import util from "../../utils/util";
import SVGData from "../../assets/svg_data/dev";

const {
  transformOrigins,
  movingParts,
  colorChangingParts,
  SVGID,
} = SVGData as DevSVGDataObj;

const SVGDiv = styled(DevSVG)`
  width: 100%;
  height: 100%;
  margin: 0;
  * {
    transition: fill 0.25s ease-in-out;
  }
`;

const DevAnimation = (props: Obj): React.ReactElement => {
  useEffect(() => {
    util.animateEach({
      elems: util.multi$(SVGID, movingParts, ">") as DOMSVGElement[],
      fromTos: [
        [
          {
            transformOrigin: transformOrigins[0],
            rotate: "-1deg",
            duration: 1,
          },
          { rotate: "1deg", duration: 1 },
        ],
        [
          {
            transformOrigin: transformOrigins[1],
            rotate: "2deg",
            duration: 1,
          },
          {
            rotate: "1deg",
            duration: 1,
          },
        ],
      ],
      tweenFunc: gsap.fromTo,
      yoyo: true,
      repeat: 999,
    });
  }, []);
  useEffect(() =>
    util.animateEach({
      elems: util.multi$(SVGID, colorChangingParts, ">") as DOMSVGElement[],
      fromTos: [
        [
          {},
          {
            fill: (props.theme as ThemeObj).main,
            duration: 0,
          },
        ],
      ],
      tweenFunc: gsap.fromTo,
      yoyo: false,
      repeat: 0,
    })
  );
  return <SVGDiv />;
};

export default withTheme(DevAnimation);
