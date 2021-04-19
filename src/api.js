import { filterPhotos } from "./shared/filterPhotos";
import { filterData } from "./shared/filterData";

export const fetchData = async (value) => {
  if (value) {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => filterData(data, value));

    const photos = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json().then((data) => filterPhotos(data, users)));

    return {users, photos};
  }
  return;
};
