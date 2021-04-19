export const filterPhotos = (data, users) => {
  const id = users.map((user) => user.id);
  return data.filter((item) => id.includes(item.id));
};
