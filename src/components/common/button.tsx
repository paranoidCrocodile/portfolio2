import React from "react";
import styled from "styled-components";

/**
 * A generic, mostly unstyled button
 * @param {object} propObject{
 *   @param {JSX.Element} [children]
 *   @param {string} [className]
 *   @param {React.MouseEvent} onClick
 * }
 * @return {React.FC}
 */

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
}

const ButtonDiv = styled.div<ButtonProps>`
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}: ButtonProps) => (
  <ButtonDiv
    className={className || ""}
    onClick={(e: React.MouseEvent) => onClick(e)}
  >
    {children}
  </ButtonDiv>
);

export default Button;
