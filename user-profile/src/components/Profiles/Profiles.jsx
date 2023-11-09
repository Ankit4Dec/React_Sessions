import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import styles from "./Profiles.module.css";
import { getUsers } from "../../services/users";

const Profiles = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then((res) => res.json())
  //     .then((output) => {
  //       setUsers(output.data);
  //     });
  // }, []);

  // BOTH API FETCH IS CORRECT , JUST A DIFFERENCE THAT WE USED ES6 SYNTAX TO BELOW ONE TO DESTRUCTER THE OUTPUT

  useEffect(() => {
    getUsers(page).then(({ data }) => {
      setUsers(data);
    });
  }, [page]);

  const profiles = users.map((user, index) => (
    <Profile
      key={index}
      fname={user.first_name}
      email={user.email}
      avatar={user.avatar}
    />
  ));

  return (
    <>
      <div>Page : {page}</div>
      <div className={styles.profiles}>{profiles}</div>
      <div>
        <button onClick={() => setPage(page === 1 ? 2 : 1)}>
          Show Page {page === 1 ? 2 : 1}
        </button>
      </div>
    </>
  );
};

export default Profiles;
