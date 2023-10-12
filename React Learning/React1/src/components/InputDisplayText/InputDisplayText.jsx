import { useState } from "react";
import DisplayText from "../DisplayText/DisplayText";
import InputText from "../InputText/InputText";

const InputDisplayText = () => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    // need to update the state with the new value;
    setText(e.target.value);
  };

  return (
    <>
      <InputText changeHandler={changeHandler} />
      <DisplayText msg={text} />
    </>
  );
};

export default InputDisplayText;
