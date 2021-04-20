import { UsersType } from "../type";
import { filterData } from "./filterData";

describe("filterData", () => {
  const value: string = "Ivan Ivanov";
  const data: UsersType[] = [
    {
      id: "1",
      name: "Ivan Ivanov",
    },
    { id: "2", name: "Petr Petrov" },
  ];
  it("returns object", () => {
    expect(filterData(data, value)).toEqual([{"id": "1", "name": "Ivan Ivanov"}]);
  });
});
