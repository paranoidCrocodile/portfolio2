import React from "react";
import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import SEO from "../components/seo";

/**
 * this is a mockup page for styling reference/testing components, not intended to be shown in production
 * @return {<React.ReactElement>}
 */

const PlaceHolder = styled.div`
  height: 2500px;
  width: 100vw;
`;

const page = {
  pageTitle: "This is a mockup page",
  pageSubtitle: "Not intended to be shown in production",
};

const Mockup: React.FC = (): React.ReactElement => (
  <MainLayout {...page}>
    <div>
      <SEO title="Mockup" />
      <PlaceHolder />
    </div>
  </MainLayout>
);

export default Mockup;
