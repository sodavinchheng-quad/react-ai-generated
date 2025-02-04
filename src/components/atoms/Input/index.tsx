import React from "react";
import styled from "styled-components";

interface InputProps {
  type?: "text" | "number" | "password" | "email" | "search";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const StyledInput = styled.input<{ size: string; disabled: boolean }>`
  padding: ${({ size }) =>
    size === "small"
      ? "5px 10px"
      : size === "medium"
        ? "10px 15px"
        : "15px 20px"};
  font-size: ${({ size }) =>
    size === "small" ? "12px" : size === "medium" ? "14px" : "16px"};
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? "0.65" : "1")};
  &:disabled {
    cursor: not-allowed;
  }
`;

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  size = "medium",
  disabled = false,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
    />
  );
};

export default Input;
