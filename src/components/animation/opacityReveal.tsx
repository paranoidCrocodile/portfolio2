import React, { useEffect } from "react";
import styled from "styled-components";
import util from "../../utils/util";
import gsap from "gsap";

const Div = styled.div`
  ${util.arbitrarilySized}
`;

const OpacityReveal = ({
  children,
  duration,
  ease,
}: AnimationCompProps): React.ReactElement => {
  useEffect(() => {
    gsap.from("#opacityReveal", { duration, opacity: 0, ease });
  }, []);
  return <Div id="opacityReveal">{children}</Div>;
};

export default OpacityReveal;
