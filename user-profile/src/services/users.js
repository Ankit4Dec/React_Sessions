export const getUsers = (page = 1 ) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) => res.json());
};
 