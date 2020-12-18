import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface OpacityReveal {
  children: React.ReactNode;
  duration: number;
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const OpacityReveal = ({
  children,
  duration,
}: OpacityReveal): React.ReactElement => {
  useEffect(() => {
    gsap.from("#opacityReveal", { duration: duration, opacity: 0 });
  });
  return <Div id="opacityReveal">{children}</Div>;
};

export default OpacityReveal;
