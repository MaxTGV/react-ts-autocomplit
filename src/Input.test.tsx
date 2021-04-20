import { fireEvent, render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  const value: string = "test";
  it("renders correctly", () => {
    const { queryByPlaceholderText } = render(
      <Input value={value} handleChange={() => {}} />
    );
    expect(queryByPlaceholderText(/Search/i)).toBeTruthy();
  });

  describe("Input value", () => {
    it("update on change", () => {
      const handleChange = jest.fn();
      const { getByPlaceholderText, getByDisplayValue } = render(
        <Input value={value} handleChange={handleChange} />
      );
      const searchInput = getByPlaceholderText(/Search/i);
      fireEvent.change(searchInput, {
        target: { value },
      });
      expect(getByDisplayValue("test")).toBeInTheDocument();
    });
  });
});
