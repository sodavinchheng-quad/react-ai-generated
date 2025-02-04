import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<{
  variant: string;
  size: string;
  disabled: boolean;
}>`
  background-color: ${({ variant }) =>
    variant === "primary"
      ? "#007bff"
      : variant === "secondary"
        ? "#6c757d"
        : "#dc3545"};
  color: #fff;
  font-size: ${({ size }) =>
    size === "small" ? "12px" : size === "medium" ? "16px" : "20px"};
  padding: ${({ size }) =>
    size === "small"
      ? "5px 10px"
      : size === "medium"
        ? "10px 20px"
        : "15px 30px"};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "0.65" : "0.85")};
  }
`;

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
