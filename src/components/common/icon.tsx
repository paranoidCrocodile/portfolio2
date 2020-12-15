import React from "react";
import styled from "styled-components";

interface IconProps {
  path?: string;
  children?: React.ReactNode;
}

const IconDiv = styled.div`
  border: 1px black solid;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: inline-block;
`;

const Icon = ({ path, children }: IconProps): React.ReactElement => {
  const props = { path, children };
  return <IconDiv {...props}></IconDiv>;
};

export default Icon;
