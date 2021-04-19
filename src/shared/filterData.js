export const filterData = (data, value) => {
  if (value) {
    return data.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  return [];
};
