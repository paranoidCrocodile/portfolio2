import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { themedDiv } from "../components/common/mixins";
import BaseLayout from "./BaseLayout";

interface LayoutProp {
  children?: React.ReactNode;
  pageTitle: string;
  pageSubtitle: string;
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
}: LayoutProp): React.ReactElement => {
  return (
    <BaseLayout>
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
