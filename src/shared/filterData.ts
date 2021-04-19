import { UsersType } from "../type";

export const filterData = (data: UsersType[], value: string) => {
  if (value) {
    return data.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  return [];
};
