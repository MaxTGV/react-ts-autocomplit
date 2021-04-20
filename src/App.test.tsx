import { fireEvent, render } from "@testing-library/react";
import { App } from "./App";
import { DataType } from "./type";

const getControlledPromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
};

describe("App", () => {
  const value: any = "Ivan Ivanov";
  const data: DataType = {
    users: [{ id: "1", name: "Ivan Ivanov" }],
    photos: [{ id: "1", url: "ivanivanov.org" }],
  };
  it.todo("renders correctly");

  describe("while loading", () => {
    it("renders loading message", () => {
      const fetchData = jest
        .fn()
        .mockImplementation(() => getControlledPromise().promise);
      const { getByAltText, getByPlaceholderText } = render(<App />);
      const searchInput = getByPlaceholderText(/Search/i);
      fireEvent.change(searchInput, {
        target: { value },
      });
      fetchData(value);
      expect(getByAltText(/loader/i)).toHaveAttribute("src", "loader.svg");
    });
  });

  describe("with valid character id", () => {
    it("renders character information", async () => {
      const fetchData = jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(data));
      const { getByPlaceholderText } = render(<App />);
      const searchInput = getByPlaceholderText(/Search/i);
      fireEvent.change(searchInput, {
        target: { value: "Ivan Ivanov" },
      });
      fetchData();
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
  });
});
