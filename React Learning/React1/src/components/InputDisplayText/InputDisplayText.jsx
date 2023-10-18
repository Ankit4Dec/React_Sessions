import { useState } from "react";
import DisplayText from "../DisplayText/DisplayText";
import InputText from "../InputText/InputText";
// import "./InputDisplayText.css";
import styles from './InputDisplayText.module.css';

const InputDisplayText = () => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    // need to update the state with the new value;
    setText(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <InputText changeHandler={changeHandler} />
        <DisplayText msg={text} />
      </div>
    </>
  );
};

export default InputDisplayText;
