import React from "react";
import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { Link } from "gatsby";
import Icon from "../components/common/icon";
import SEO from "../components/seo";
import GlobalStyle from "../components/common/globalStyle";
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.fontLight};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const TitleCard = styled.div``;
const Links = styled.div``;
const Socials = styled.div``;

const Index: React.FC = (): React.ReactElement => (
  <>
    <GlobalStyle />
    <MainLayout empty={true}>
      <Backdrop>
        <SEO title="index" />
        <TitleCard>
          <p>Hello! I am</p>
          <h1>Crocodile</h1>
          <p>A web developer for hire!</p>
        </TitleCard>
        <Links>
          <Link to="/bio">Bio</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </Links>
        <Socials>
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </Socials>
      </Backdrop>
    </MainLayout>
  </>
);

export default Index;
