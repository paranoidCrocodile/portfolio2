import React from "react";
import styled from "styled-components";
import { themedDiv } from "../common/mixins";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const CardDiv = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0rem;
  ${themedDiv}
`;

const Card = ({ children, className }: CardProps): React.ReactElement => (
  <CardDiv className={className || ""}>{children}</CardDiv>
);

export default Card;