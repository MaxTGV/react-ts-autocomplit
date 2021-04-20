import { fireEvent, render } from "@testing-library/react";
import { DropDownBox } from "./DropDownBox";
import { DataType } from "./type";

export {};
describe("DropDownBox", () => {
  const data: DataType = {
    users: [{ id: "1", name: "Ivan Ivanov" }],
    photos: [{ id: "1", url: "ivanivanov.org" }],
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <DropDownBox data={data} handleClick={() => {}} />
    );
    expect(getByText(/Ivan Ivanov/i)).toBeInTheDocument();
  });

  describe("with data inside query", () => {
    it("triggers requestSearch function", () => {
      const handleClick = jest.fn();
      const { getByText } = render(
        <DropDownBox data={data} handleClick={handleClick} />
      );
      const clickElement = getByText(/Ivan Ivanov/i);
      fireEvent.click(clickElement);

      expect(handleClick).toHaveBeenCalled();
      expect(getByText("Ivan Ivanov")).toBeInTheDocument();
    });
  });
});
