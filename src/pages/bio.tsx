import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
import MainLayout from "../layout/MainLayout";
import Card from "../components/common/card";
import util from "../utils/util";

interface BioProps extends ComponentProps {
  data: imageData;
}

interface imageData {
  allImageSharp: {
    edges: [
      {
        node: {
          fixed: {
            src: string;
          };
        };
      }
    ];
  };
}

const PFP = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0;
  ${util.alternateBorder}
`;

const Bio = ({ data }: BioProps): React.ReactElement => {
  return (
    <MainLayout
      pageTitle="My name is Crocodile"
      pageSubtitle="I make websites for fun!"
    >
      <SEO title="Bio" />
      <Card>
        <PFP src={data.allImageSharp.edges[0].node.fixed.src} />
        <h1>This is Title</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          repudiandae tenetur asperiores doloribus esse natus vel repellat,
          dicta nostrum praesentium voluptate laudantium, culpa, nam ipsum sint.
          Assumenda, et. Error, praesentium.
        </p>
      </Card>
    </MainLayout>
  );
};

export const query = graphql`
  query MyQuery {
    allImageSharp(filter: { fixed: { src: { regex: "/avatar.jpg/" } } }) {
      edges {
        node {
          fixed(width: 250, height: 250) {
            src
          }
        }
      }
    }
  }
`;
export default Bio;
