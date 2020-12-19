import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  position: sticky;
  top: 0px;
  color: ${(props) => props.theme.fontLight};
  background-color: ${(props) => props.theme.second};
  transition: background-color 0.25s ease-in-out;
`;

const BlankDiv = styled.div`
  height: 15px;
  width: 15px;
`;

const FlexContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  padding: 1rem 0 1rem 0;
  color: inherit;
`;

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 1rem 0 1rem 0;
  & + & {
    margin-left: 1rem;
  }
`;

const Header = (): React.ReactElement => (
  <HeaderDiv>
    <FlexContainer>
      <BlankDiv />
      <LinkContainer>
        <HeaderLink to="/bio">Bio</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/blog">Contacts</HeaderLink>
      </LinkContainer>
    </FlexContainer>
  </HeaderDiv>
);

export default Header;
