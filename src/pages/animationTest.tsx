import React from "react";
import styled from "styled-components";
import DevSVG from "../components/animation/dev";
import BaseLayout from "../layout/BaseLayout";

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

const AnimationTest = (): React.ReactElement => (
  <BaseLayout>
    <Backdrop>
      <Animation>
        <DevSVG />
      </Animation>
    </Backdrop>
  </BaseLayout>
);

export default AnimationTest;
