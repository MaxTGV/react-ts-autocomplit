import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("render correctly", () => {
    const { getByAltText } = render(<Loader />);
    expect(getByAltText(/loader/i)).toHaveAttribute("src", "loader.svg");
  });
});
