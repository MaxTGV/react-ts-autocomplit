import { useEffect, useState } from "react";

const filterData = (data, value) => {
  if (value) {
    return data.filter((user) => user.name.includes(value));
  }
  return [];
};

const filterPhotos = (data, users) => {
  const id = users.map((user) => user.id);
  return data.filter((item) => id.includes(item.id));
};

const fetchUsers = async (value) => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => filterData(data, value));
  return users;
};

const fetchPhotos = async (users) => {
  const photos = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((res) => res.json().then((data) => filterPhotos(data, users)));
  return photos;
};

export const App = () => {
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState();
  const [photos, setPhotos] = useState();
  console.log(value);
  console.log("users", users);
  console.log("photos", photos);

  const handleChange = async (e) => {
    setValue(e.target.value);
    setLoad(true);
  };

  const handleClick = (name) => {
    setValue(name);
    setLoad(false);
    setUsers();
    setPhotos();
  };

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchUsers(value);
      const photosData = await fetchPhotos(usersData);

      setUsers(usersData);
      setPhotos(photosData);
    };
    loadData();
  }, [value]);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <div>
        {users && load &&
          users.map((user) => (
            <div key={user.id} onClick={() => handleClick(user.name)}>
              {user.name}
            </div>
          ))}
        {photos && load &&
          photos.map((photo) => <img key={photo.id} src={photo.url} alt={photo.title} />)}
      </div>
    </>
  );
};
