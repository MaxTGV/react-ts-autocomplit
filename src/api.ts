import { filterPhotos } from "./shared/filterPhotos";
import { filterData } from "./shared/filterData";

export const fetchData = async (value: string) => {
  if (value) {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            res.statusText || "Something went wrong with users loading"
          );
        }
      })
      .then((data) => filterData(data, value));

    const photos = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            res.statusText || "Something went wrong with photos loading"
          );
        }
      })
      .then((data) => filterPhotos(data, users));

    return { users, photos };
  }
  return;
};
