import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Theme, { lightTheme, darkTheme } from "../components/common/theme";
import { themedDiv } from "../components/common/mixins";
import GlobalStyle from "../components/globalStyle";
import "../style/reset.css";

interface LayoutProp {
  children?: React.ReactNode;
  pageTitle?: string;
  pageSubtitle?: string;
  empty: boolean;
}

const HeaderDiv = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
`;

const PageHead = styled.div`
  width: 100vw;
  height: 12rem;
  ${themedDiv}
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

const MainLayout = ({
  children,
  pageTitle,
  pageSubtitle,
  empty,
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

  const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [themeBool, changeTheme] = useState(preferDark);

  return (
    <>
      <GlobalStyle />
      <Theme {...(themeBool ? lightTheme : darkTheme)}>
        <Backdrop>
          {empty ? (
            children
          ) : (
            <>
              <HeaderDiv
                siteTitle={data.site.siteMetadata?.title || `title`}
                changeTheme={changeTheme}
                themeBool={themeBool}
              />
              <PageHead>
                <PageHeadDiv>
                  <PageTitle>{pageTitle}</PageTitle>
                  <PageSubtitle>{pageSubtitle}</PageSubtitle>
                </PageHeadDiv>
              </PageHead>
              <Main>{children}</Main>
              <Footer>
                <FooterDiv>
                  © {new Date().getFullYear()}, Built with Gatsby
                </FooterDiv>
              </Footer>
            </>
          )}
        </Backdrop>
      </Theme>
    </>
  );
};
export default MainLayout;
