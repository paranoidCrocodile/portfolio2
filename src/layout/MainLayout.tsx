import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import util from "../utils/util";
import BaseLayout from "./BaseLayout";
import { useStaticQuery, graphql } from "gatsby";

interface LayoutProp extends ComponentProps {
  pageTitle: string;
  pageSubtitle: string;
  avatar: boolean;
}

interface ImageData {
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

const { alternateBorder, shadow } = util;

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
`;

const PageHead = styled.div`
  width: 100vw;
  height: 12rem;
  ${alternateBorder}
  ${shadow}
  ${(props) => {
    const { isDark, fontLight, backgroundSecond, main } = props.theme;
    return `
    background-color: ${isDark ? backgroundSecond : main};
    color: ${fontLight};
    `;
  }}
`;

const PageHeadDiv = styled.div`
  padding: 3rem 1rem;
  margin: 0 auto 0 auto;
  max-width: 1200px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
`;
const PageSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
`;

const FooterDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Footer = styled.footer`
  width: 100vw;
  height: 5rem;
  background-color: ${(props) => props.theme.third};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100%;
  z-index: -1;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  min-height: 17.75rem;
`;

const Avatar = styled.img`
  position: absolute;
  top: 125px;
  left: 62.5%;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  ${util.alternateBorder}
`;

const AbsLayer = styled.div`
  position: absolute;
  width: 99vw;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  z-index: 2;
  margin: 0;
`;

const MainLayout = ({
  children,
  pageTitle,
  pageSubtitle,
  avatar,
}: LayoutProp): React.ReactElement => {
  const data = !avatar
    ? null
    : (useStaticQuery(graphql`
        query Avatar {
          allImageSharp(filter: { fixed: { src: { regex: "/avatar.jpg/" } } }) {
            edges {
              node {
                fixed(width: 300, height: 300) {
                  src
                }
              }
            }
          }
        }
      `) as ImageData);
  return (
    <BaseLayout>
      {!avatar ? null : (
        <AbsLayer>
          <Avatar src={data?.allImageSharp.edges[0].node.fixed.src} />
        </AbsLayer>
      )}
      <Backdrop>
        <HeaderDiv />
        <PageHead>
          <PageHeadDiv>
            <PageTitle>{pageTitle}</PageTitle>
            <PageSubtitle>{pageSubtitle}</PageSubtitle>
          </PageHeadDiv>
        </PageHead>
        <Main>{children}</Main>
        <Footer>
          <FooterDiv>© {new Date().getFullYear()}, Built with Gatsby</FooterDiv>
        </Footer>
      </Backdrop>
    </BaseLayout>
  );
};

export default MainLayout;
