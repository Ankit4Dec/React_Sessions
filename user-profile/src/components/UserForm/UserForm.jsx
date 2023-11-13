import { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const createUserHandler = () => {
    const user = {
      fname,
      lname,
      email,
      mobile,
    };

    const reqObj = {
      method: "POST",
      body: JSON.stringify(user),
    };

    fetch("https://reqres.in/api/users", reqObj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFname("");
        setLname("");
        setEmail("");
        setMobile("");
        setSuccessMsg(`User has been created with user ID : ${data.id} `);
      });
  };

  return (
    <div className={styles.form}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          className={styles.inpurfield}
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name</label>
        <input
          className={styles.inpurfield}
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email id</label>
        <input
          className={styles.inpurfield}
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="mobile">Mobile Number</label>
        <input
          className={styles.inpurfield}
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
      </div>
      <div>
        <button className={styles.inpurfield} onClick={createUserHandler}>
          Create User
        </button>
      </div>
      <div className={styles.successMsg}>{successMsg}</div>
    </div>
  );
};

export default UserForm;
