import { render } from "@testing-library/react";
import { ExampleAtom } from "../ExampleAtom";

describe("ExampleAtom", () => {
  it("should render correctly", () => {
    const { container } = render(<ExampleAtom text="Hello World" />);

    expect(container).toHaveTextContent("Hello World");
  });
});
