import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const buttonClickHandler = () => {
    const trimTask = task.trim();
    if (trimTask) {
      setTasks([...tasks, task]);
      setTask("");
    } else {
      setTask("");
    }
  };

  const InputKeyHandler = (e) => {
    if (e.key === "Enter") {
      buttonClickHandler();
    }
  };
  return (
    <>
      <Input
        changeHandler={changeHandler}
        value={task}
        keyHandler={InputKeyHandler}
      />
      <span style={{ marginLeft: "10px" }}></span>
      <Button
        clickHandler={buttonClickHandler}
        isDisable={!task}
        btnText="Add to the List"
      />
      <div style={{ marginTop: "15px" }}>
        <List list={tasks} />
      </div>
    </>
  );
};

export default TodoList;
