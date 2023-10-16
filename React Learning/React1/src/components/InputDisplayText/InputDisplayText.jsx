import { useState } from "react";
import DisplayText from "../DisplayText/DisplayText";
import InputText from "../InputText/InputText";
import "./InputDisplayText.css";

const InputDisplayText = () => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    // need to update the state with the new value;
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <InputText changeHandler={changeHandler} />
        <DisplayText msg={text} />
      </div>
    </>
  );
};

export default InputDisplayText;
