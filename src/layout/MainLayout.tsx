import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import "../style/reset.css";

interface LayoutProp {
  children?: React.ReactNode;
}

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
`;

/**
 * Sets up the Main Layout for the page, CSS reset included
 * @param {<React.ReactNode>} [childElement] <ONLY TAKES UP TO ONE CHILD, Wrap MainLayout descendants in a div.>
 * @return {<React.ReactElement>}
 */

const Layout: React.FC = ({ children }: LayoutProp): React.ReactElement => {
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
      <Div>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Div>
    </React.Fragment>
  );
};

export default Layout;
