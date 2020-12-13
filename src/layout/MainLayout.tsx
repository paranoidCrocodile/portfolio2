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
  padding: 0 1rem 1rem;
`;

const PageHead = styled.div`
  width: 100vw;
  height: 30vh;
  border: 1px black solid;
`;

const PageHeadContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
`;
const PageSubtitle = styled.p`
  font-size: 1.25rem;
`;

const MarginContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.0875rem 1.45rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
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
    <React.Fragment>
      <HeaderDiv siteTitle={data.site.siteMetadata?.title || `Title`} />
      <PageHead>
        <PageHeadContainer>
          <PageTitle>{pageTitle}</PageTitle>
          <PageSubtitle>{pageSubtitle}</PageSubtitle>
        </PageHeadContainer>
      </PageHead>
      <MarginContainer>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </MarginContainer>
    </React.Fragment>
  );
};

export default MainLayout;
