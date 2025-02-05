type Props = {
  text: string;
};

export const ExampleAtom: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};
