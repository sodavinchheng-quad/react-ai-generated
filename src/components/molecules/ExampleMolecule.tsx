import { ExampleAtom } from "../atoms/ExampleAtom";

type Props = {
  text: string;
};

export const ExampleMolecule: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <ExampleAtom text={text} />
    </div>
  );
};
