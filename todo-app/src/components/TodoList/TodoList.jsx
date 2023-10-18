import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const TodoList = () => {

    const [tasks, setTasks] = useState(['a1','a2','a3','a4']);
  return (
    <>
      <Input />
      <span style={{ marginLeft: "10px" }}></span>
      <Button />
      <div style={{marginTop: '15px'}}>
        <List list={tasks} />
      </div>
    </>
  );
};

export default TodoList;
