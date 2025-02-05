type Props = {
  children: React.ReactNode;
};

export const ExampleTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <p>Example Template</p>

      {children}
    </div>
  );
};
