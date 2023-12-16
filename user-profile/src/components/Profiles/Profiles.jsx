import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import styles from "./Profiles.module.css";
import { getUsers, deleteUsers } from "../../services/users";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "./../../routes/routes.json";

const Profiles = ({ page = "1" }) => {
  const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then((res) => res.json())
  //     .then((output) => {
  //       setUsers(output.data);
  //     });
  // }, []);

  // BOTH API FETCH IS CORRECT , JUST A DIFFERENCE THAT WE USED ES6 SYNTAX TO BELOW ONE TO DESTRUCTER THE OUTPUT

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then(({ data }) => {
        setUsers(data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("Error is Coming");
        setIsLoading(false);
        setIsError(true);
      });
  }, [page]);

  const deleteHandler = (userIndex) => {
    // below line Destructer
    const { id: userId } = users[userIndex];
    deleteUsers(userId).then((isDeleted) => {
      if (isDeleted) {
        const usersData = [...users];
        usersData.splice(userIndex, 1);
        setUsers(usersData);
      }
    });
  };

  const profiles = users.map((user, index) => (
    <Profile
      key={index}
      fname={user.first_name}
      email={user.email}
      avatar={user.avatar}
      deleteHandler={deleteHandler}
      userIndex={index}
    />
  ));

  return (
    <>
      {/* Conditional Rederening */}
      {isLoading && <div>Loader.....</div>}
      {!isLoading && (
        <>
          <div>Page : {page}</div>
          {isError && (
            <p className={styles.errorMsg}>
              There is Some Error , Please try later
            </p>
          )}

          {!isError && <div className={styles.profiles}>{profiles}</div>}

          <div>
            <button
              onClick={() => {
                const nextPage = page === "1" ? "2" : "1";
                const path = `/${routes.PROFILES}/${nextPage}`;
                navigate(path);
              }}
            >
              Show Page {page === "1" ? "2" : "1"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
