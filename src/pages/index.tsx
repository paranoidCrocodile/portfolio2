import React from "react";
import styled from "styled-components";
import BaseLayout from "../layout/BaseLayout";
import { Link } from "gatsby";
import { alternateBackgroundSec, hoverable } from "../components/common/mixins";
import SEO from "../components/seo";
import DevAnimation from "../components/animation/dev";

const Backdrop = styled.div`
  ${alternateBackgroundSec}
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 50%;
  margin: 0px 0px 0px 0px;
  padding: 31.5vh 0;
  display: inline-block;
  text-align: right;
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
  color: ${(props) => props.theme.fontLight};
  height: 3rem;
  width: 5rem;
  background-color: ${(props) => props.theme.main};
  & + & {
    margin-left: 1rem;
  }
  ${hoverable}
`;

const SVGDiv = styled.div`
  width: 50%;
  height: 25vh;
  margin: 20vh;
`;

const Index: React.FC = (): React.ReactElement => {
  return (
    <BaseLayout>
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
        </Container>
        <SVGDiv>
          <DevAnimation />
        </SVGDiv>
      </Backdrop>
    </BaseLayout>
  );
};

export default Index;
