import React from "react";
import styled from "styled-components";

import MainLayout from "../layout/MainLayout";
import SEO from "../components/seo";
import Image from "../components/image";

const ImgDiv = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

/**
 * The index page and also the entry point of the project.
 * @return {<React.ReactElement>}
 */

const Index: React.FC = (): React.ReactElement => (
  <MainLayout>
    <div>
      <SEO title="Home" />
      <h1>This is a starter</h1>
      <p>
        This is based off the default gatsby-starter, but with these extra
        features:
      </p>
      <ul>
        <li>TypeScript</li>
        <li>Styled-components</li>
      </ul>
      <p>Made by crocsdundee</p>
      <ImgDiv>
        <Image />
      </ImgDiv>
    </div>
  </MainLayout>
);

export default Index;
