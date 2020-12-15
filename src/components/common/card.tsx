import React from "react";
import styled from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const CardDiv = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  ${(props) => {
    const { isDark, main, backgroundSecond, fontLight, fontDark } = props.theme;
    return `
    background-color: ${backgroundSecond};
    color: ${isDark ? fontLight : fontDark};
    ${isDark ? `border: 1px ${main} solid;` : ``}
    `;
  }}
`;

const Card = ({ children, className }: CardProps): React.ReactElement => (
  <CardDiv className={className || ""}>{children}</CardDiv>
);

export default Card;
