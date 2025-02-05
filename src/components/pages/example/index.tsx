import { ExampleOrganism } from "../../organisms/ExampleOrganism";
import { ExampleTemplate } from "../../templates/ExampleTemplate";
import { useExample } from "./hook";

export const ExamplePage: React.FC = () => {
  const { exampleText } = useExample();

  return (
    <ExampleTemplate>
      <ExampleOrganism text={exampleText} />
    </ExampleTemplate>
  );
};
