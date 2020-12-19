import React from "react";
import styled from "styled-components";
import DevSVG from "../components/animation/dev";
import BaseLayout from "../layout/BaseLayout";
import SlideReveal from "../components/animation/slideReveal";

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Animation = styled.div`
  height: 50%;
  width: 50%;
`;

const props = {
  translateX: "100%",
  translateY: "0%",
  duration: 1,
  ease: "power4.out",
};

const AnimationTest = (): React.ReactElement => (
  <BaseLayout>
    <Backdrop>
      <Animation>
        <SlideReveal {...props}>
          <DevSVG />
        </SlideReveal>
      </Animation>
    </Backdrop>
  </BaseLayout>
);

export default AnimationTest;
