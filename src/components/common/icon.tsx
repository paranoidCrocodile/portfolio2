import React from "react";
import styled from "styled-components";
import { themedDiv } from "./mixins";

interface IconProps {
  path?: string;
  children?: React.ReactNode;
}

const IconDiv = styled.div`
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: inline-block;
  ${themedDiv};
  & + & {
    margin-left: 0.5rem;
  }
`;

const Icon = ({ path, children }: IconProps): React.ReactElement => {
  const props = { path, children };
  return <IconDiv {...props}></IconDiv>;
};

export default Icon;
