import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const OpacityReveal = ({
  children,
  duration,
}: AnimationCompProps): React.ReactElement => {
  useEffect(() => {
    gsap.from("#opacityReveal", { duration: duration, opacity: 0 });
  }, []);
  return <Div id="opacityReveal">{children}</Div>;
};

export default OpacityReveal;
