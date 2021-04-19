import { PhotosType, UsersType } from "../type";

export const filterPhotos = (data: PhotosType[], users: UsersType[]) => {
  const id = users.map((user) => user.id);
  return data.filter((item) => id.includes(item.id));
};
