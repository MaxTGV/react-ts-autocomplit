import { PhotosType, UsersType } from "../type";
import { filterPhotos } from "./filterPhotos";

describe("filterPhotos", () => {
  const data: PhotosType[] = [
    {
      id: "1",
      url: "ivanivanov.org",
    },
    { id: "2", url: "petrpetrov.org" },
  ];
  const users: UsersType[] = [
    {
      id: "1",
      name: "Ivan Ivanov",
    },
  ];
  it("returns object", () => {
    expect(filterPhotos(data, users)).toEqual([
      { id: "1", url: "ivanivanov.org" },
    ]);
  });
});
