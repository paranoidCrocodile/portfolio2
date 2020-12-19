import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import util from "../../utils/util";

interface slideRevealProps extends AnimationCompProps {
  translateX: number | string;
  translateY: number | string;
}

const Div = styled.div`
  ${util.arbitrarilySized}
`;

const slideReveal = ({
  children,
  duration,
  translateX,
  translateY,
  ease,
}: slideRevealProps): React.ReactElement => {
  useEffect(() => {
    gsap.from("#slideReveal", {
      duration,
      translateX,
      translateY,
      ease,
    });
  }, []);
  return <Div id="slideReveal">{children}</Div>;
};

export default slideReveal;
