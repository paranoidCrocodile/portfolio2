import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./common/button";

/**
 * Returns a styled header for reuse in each page.
 * @param {<string>} setTitle sets the title of the page, format: "<setTitle> | Gatsby Starter", navigate to root/gatsby-config.js to change the second part of the title.
 * @return {<React.ReactElement>}
 */

interface HeaderProp {
  siteTitle: string;
}

const HeaderDiv = styled.div`
  position: sticky;
  top: 0px;
  background: #2980b9;
  color: white;
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
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem 0 1rem 0;
  & + & {
    margin-left: 1rem;
  }
`;

const ThemeButton = styled(Button)`
  background-color: inherit;
  color: inherit;
  padding: 1rem 0 1rem 0;
`;

const Header = ({ siteTitle }: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <FlexContainer>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
      <LinkContainer>
        <HeaderLink to="/bio">Bio</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/blog">Contacts</HeaderLink>
      </LinkContainer>
      <ThemeButton onClick={(e) => console.log(e)}>Theme</ThemeButton>
    </FlexContainer>
  </HeaderDiv>
);

export default Header;
