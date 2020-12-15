import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
}

const ButtonDiv = styled.div`
  color: inherit;
  background: inherit;
  cursor: pointer;
`;

const Button = ({
  children,
  className,
  onClick,
}: ButtonProps): React.ReactElement => (
  <ButtonDiv
    className={className || ""}
    onClick={(e: React.MouseEvent) => onClick(e)}
  >
    {children}
  </ButtonDiv>
);

export default Button;
