import { Link } from "gatsby";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Button from "./common/button";

interface HeaderProp {
  siteTitle: string;
  themeBool: boolean;
  changeTheme: Dispatch<SetStateAction<boolean>>;
}

const HeaderDiv = styled.div`
  position: sticky;
  top: 0px;
  color: ${(props) => props.theme.fontLight};
  background-color: ${(props) => props.theme.second};
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

const ThemeButton = styled(Button)`
  padding: 1rem 0 1rem 0;
`;

const Header = ({
  siteTitle,
  changeTheme,
  themeBool,
}: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <FlexContainer>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
      <LinkContainer>
        <HeaderLink to="/bio">Bio</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/blog">Contacts</HeaderLink>
      </LinkContainer>
      <ThemeButton onClick={(e) => changeTheme(!themeBool)}>Theme</ThemeButton>
    </FlexContainer>
  </HeaderDiv>
);

export default Header;
