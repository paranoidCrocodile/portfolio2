import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

interface HeaderProp {
  siteTitle: string;
}

/**
 * Returns a styled header for reuse in each page.
 * @param {<string>} setTitle sets the title of the page, format: "<setTitle> | Gatsby Starter", navigate to root/gatsby-config.js to change the second part of the title.
 * @return {<React.ReactElement>}
 */

const Header = ({ siteTitle }: HeaderProp): React.ReactElement => (
  <HeaderDiv>
    <Div>
      <H1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </H1>
    </Div>
  </HeaderDiv>
);

export default Header;
