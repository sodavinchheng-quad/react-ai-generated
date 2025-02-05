import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const ExampleTemplate: React.FC<Props> = ({ children }) => {
  return (
    <StyledTemplateContainer>
      <StyledExampleTitle>Example Template</StyledExampleTitle>

      {children}
    </StyledTemplateContainer>
  );
};

const StyledTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StyledExampleTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
