import { useState } from "react";
import DisplayText from "../DisplayText/DisplayText";
import InputText from "../InputText/InputText";

const InputDisplayText = () => {

    const [text , setText] = useState('');
    console.log(text)

  return (
    <div>
      <InputText
        changeHandler={(e) => {
            // need to update the state with the new value;
            setText(e.target.value);
        //   console.log("from parent ===>>", e.target.value);
        }}
      />
      <DisplayText msg={text} />
    </div>
  );
};

export default InputDisplayText;
