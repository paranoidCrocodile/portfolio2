import React from "react";
import styled from "styled-components";

/**
 * A generic card
 * @param {React.ReactNode} [children]
 * @param {string} [className]
 */

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const CardDiv = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Card: React.FC<CardProps> = ({ children, className }) => (
  <CardDiv className={className || ""}>{children}</CardDiv>
);

export default Card;
