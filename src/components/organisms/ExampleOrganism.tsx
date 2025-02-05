import { ExampleMolecule } from "../molecules/ExampleMolecule";

type Props = {
  text: string;
};

export const ExampleOrganism: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <ExampleMolecule text={text} />
    </div>
  );
};
