import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  variant?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  textAlign?: "left" | "right" | "center" | "justify";
}

const StyledText = styled.p<{
  color: string;
  fontSize: string;
  fontWeight: number;
  textAlign: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;

const Text = ({
  children,
  variant = "p",
  color = "#000",
  fontSize = "16px",
  fontWeight = 400,
  textAlign = "left",
}: TextProps) => {
  return (
    <StyledText
      as={variant}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};

export default Text;
