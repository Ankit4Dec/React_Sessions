import { useRef, useState } from "react";
import styles from "./UserForm.module.css";
import { setUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { backgroundColorHoC } from "../../hoc/backgroundColorHoC";

const UserForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const reRenderCount = useRef(0);

  const navigate = useNavigate();

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

  const isValidate = () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const validations = [
      {
        isValid: !fname,
        errorMsg: "Please enter the first name",
        refElem: fnameRef,
      },
      {
        isValid: fname.length < 3,
        errorMsg: "Please enter atleast 3 characters in first name",
        refElem: fnameRef,
      },
      {
        isValid: !lname,
        errorMsg: "Please enter the last name",
        refElem: lnameRef,
      },
      {
        isValid: lname.length < 3,
        errorMsg: "Please enter atleast 3 characters in last name",
        refElem: lnameRef,
      },
      {
        isValid: !email,
        errorMsg: "Please enter email id",
        refElem: emailRef,
      },
      {
        isValid: !emailRegex.test(email),
        errorMsg: "Please enter valid email id",
        refElem: emailRef,
      },
      {
        isValid: !mobile,
        errorMsg: "Please enter the mobile number",
        refElem: mobileRef,
      },
      {
        isValid: mobile.length !== 10,
        errorMsg: "Please enter valid mobile number",
        refElem: mobileRef,
      },
    ];

    for (const validate of validations) {
      if (validate.isValid) {
        setErrorMsg(validate.errorMsg);
        // focus code for error field;
        validate.refElem.current.focus();
        return false;
      }
    }

    // if (!fname) {
    //   setErrorMsg("Please enter the first name");
    //   return false;
    // } else if (fname.length < 3) {
    //   setErrorMsg("Please enter atleast 3 characters in first name");
    //   return false;
    // } else if (!lname) {
    //   setErrorMsg("Please enter the last name");
    //   return false;
    // } else if (lname.length < 3) {
    //   setErrorMsg("Please enter atleast 3 characters in last name");
    //   return false;
    // } else if (!email) {
    //   setErrorMsg("Please enter email id");
    //   return false;
    // } else if (!emailRegex.test(email)) {
    //   setErrorMsg("Please enter valid email id");
    //   return false;
    // } else if (!mobile) {
    //   setErrorMsg("Please enter the mobile number");
    //   return false;
    // } else if (mobile.length !== 10) {
    //   setErrorMsg("Please enter valid mobile number");
    //   return false;
    // }
    return true;
  };

  const createUserHandler = () => {
    // generic form validation
    // if (!(fname && lname && email && mobile)) {
    //   setErrorMsg("Please enter all required fields !!! ");
    //   return;
    // }

    if (!isValidate()) {
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
        showSuccessMsg(
          `User has been created with user ID : ${data.id}, You will be redirect to HOME PAGE`
        );
        setTimeout(() => navigate(routes.HOME), 5000);
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
          ref={fnameRef}
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
          ref={lnameRef}
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
          ref={emailRef}
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
          ref={mobileRef}
          className={styles.inpurfield}
          type="number"
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
      <div>Re-rendering Count: {++reRenderCount.current} </div>
    </div>
  );
};

export default backgroundColorHoC(UserForm);
