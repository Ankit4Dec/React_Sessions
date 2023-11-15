export const getUsers = (page = 1) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
};

export const deleteUsers = (userId) => {
  const resObj = {
    method: "Delete",
  };
  return fetch(`https://reqres.in/api/users/${userId}`, resObj).then(
    (res) => res.status === 204
  );
};

export const setUser = (user) => {
  const reqObj = {
    method: "POST",
    body: JSON.stringify(user),
  };

  return fetch("https://reqres.in/api/users", reqObj).then((res) => res.json());
};
