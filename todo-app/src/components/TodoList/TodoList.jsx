import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  //// ComponentDidMount  -  then dependencies list will be empty
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todoList"));
    setTasks(list || []);
  }, []);

  useEffect(() => {
    // update the list in local storage
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const buttonClickHandler = () => {
    const trimTask = task.trim();
    if (trimTask) {
      const taskObj = {
        item: trimTask,
        isDone: false,
      };
      setTasks([...tasks, taskObj]);
    }
    setTask("");
  };

  const InputKeyHandler = (e) => {
    if (e.key === "Enter") {
      buttonClickHandler();
    }
  };

  const isDoneHandler = (index) => {
    console.log("is Done", index);
    const list = [...tasks];
    list[index].isDone = true;
    setTasks(list);
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
        <List list={tasks} isDoneHandler={isDoneHandler} />
      </div>
    </>
  );
};

export default TodoList;
