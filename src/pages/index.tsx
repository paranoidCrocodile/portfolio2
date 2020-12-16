import React from "react";
import styled from "styled-components";
import MainLayout from "../layout/MainLayout";
import { Link } from "gatsby";
import Icon from "../components/common/icon";
import { themedDiv, themedDivBorderless } from "../components/common/mixins";
import SEO from "../components/seo";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  ${themedDivBorderless}
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 0 auto;
  padding: 31.5vh 0 31.5vh 0;
`;

const TitleCard = styled.div`
  margin-bottom: 1rem;
`;

const IndexTitle = styled.h1`
  margin: 0;
  font-size: 5rem;
  color: inherit;
`;

const IndexSubtitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: inherit;
`;

const Links = styled.div`
  margin-bottom: 1rem;
`;

const IndexLink = styled(Link)`
  padding: 1rem 0;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  height: 3rem;
  width: 5rem;
  & + & {
    margin-left: 1rem;
  }
  ${themedDiv}
`;

const Socials = styled.div``;

const Index: React.FC = (): React.ReactElement => (
  <MainLayout empty={true}>
    <Backdrop>
      <SEO title="index" />
      <Container>
        <TitleCard>
          <IndexSubtitle>Hello! I am</IndexSubtitle>
          <IndexTitle>Crocodile</IndexTitle>
          <IndexSubtitle>A web developer for hire!</IndexSubtitle>
        </TitleCard>
        <Links>
          <IndexLink to="/bio">Bio</IndexLink>
          <IndexLink to="/projects">Projects</IndexLink>
          <IndexLink to="/contacts">Contacts</IndexLink>
        </Links>
        <Socials>
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </Socials>
      </Container>
    </Backdrop>
  </MainLayout>
);

export default Index;
