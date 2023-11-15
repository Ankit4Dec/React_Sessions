import { useState } from "react";
import styles from "./UserForm.module.css";
import { setUser } from "../../services/users";

const UserForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const resetFields = () => {
    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
    setSuccessMsg("");
    setErrorMsg("");
  };

  const showSuccessMsg = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
  };

  const showErrorMsg = (mgs) => {
    setErrorMsg(mgs);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };

  const createUserHandler = () => {
    // generic form validation
    if (!(fname && lname && email && mobile)) {
      setErrorMsg("Please enter all required fields !!! ");
      return;
    }

    const user = {
      fname,
      lname,
      email,
      mobile,
    };

    setIsLoading(true);
    setUser(user)
      .then((data) => {
        resetFields();
        setIsLoading(false);
        showSuccessMsg(`User has been created with user ID : ${data.id}`);
      })
      .catch(() => {
        setIsLoading(false);
        showErrorMsg("There is an error , Please try again !!!  ");
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
        <button
          className={styles.inpurfield}
          disabled={isLoading}
          onClick={createUserHandler}
        >
          Create User
        </button>

        <button onClick={resetFields}>Reset Form</button>
      </div>
      {isLoading && <div>Loading...</div>}

      <div className={styles.errorMsg}>{errorMsg}</div>

      <div className={styles.successMsg}>{successMsg}</div>
    </div>
  );
};

export default UserForm;
