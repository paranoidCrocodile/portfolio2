import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import "../style/reset.css";

/**
 * Sets up the Main Layout for the page, CSS reset included
 * @param {<React.ReactNode>} [childElement] <ONLY TAKES UP TO ONE CHILD, Wrap MainLayout descendants in a div.>
 * @return {<React.ReactElement>}
 */

interface LayoutProp {
  children?: React.ReactNode;
  pageTitle?: string;
  pageSubtitle?: string;
}

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
`;

const PageHead = styled.div`
  width: 100vw;
  height: 12rem;
  background-color: #3498db;
  color: white;
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
  background-color: #205f8a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  height: 100%;
  z-index: -1;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  min-height: 17.75rem;
`;

const MainLayout: React.FC = ({
  children,
  pageTitle,
  pageSubtitle,
}: LayoutProp): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Backdrop>
      <HeaderDiv siteTitle={data.site.siteMetadata?.title || `Title`} />
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
  );
};

export default MainLayout;
