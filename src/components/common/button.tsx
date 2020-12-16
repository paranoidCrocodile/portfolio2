import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

const ButtonDiv = styled.div`
  cursor: pointer;
`;

const Button = ({ children, onClick }: ButtonProps): React.ReactElement => (
  <ButtonDiv onClick={(e: React.MouseEvent) => onClick(e)}>
    {children}
  </ButtonDiv>
);

export default Button;
