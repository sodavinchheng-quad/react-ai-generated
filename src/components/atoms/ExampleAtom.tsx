import styled from "styled-components";

type Props = {
  text: string;
};

export const ExampleAtom: React.FC<Props> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

const StyledText = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;
