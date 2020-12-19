import React from "react";
import styled from "styled-components";
import util from "../../utils/util";

const { alternateBackgroundSec, alternateBorder, shadow } = util;

const CardDiv = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0rem;
  ${alternateBackgroundSec}
  ${alternateBorder}
  ${shadow}
`;

const Card = ({ children, className }: ComponentProps): React.ReactElement => (
  <CardDiv className={className || ""}>{children}</CardDiv>
);

export default Card;
