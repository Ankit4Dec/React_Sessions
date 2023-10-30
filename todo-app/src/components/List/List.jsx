import Button from "../Button/Button";

const List = ({ list, isDoneHandler, deleteHandler }) => {
  // ['a','b','c'] ==> [<li key="">a</li>, <li key="">b</li>, <li key="">c</li>]

  const listItem = list.map((task, index) => (
    <li key={index}>
      {task.item}{" "}
      {!task.isDone && (
        <Button
          btnText="Done"
          clickHandler={() => {
            isDoneHandler(index);
          }}
        />
      )}
      {task.isDone && (
        <Button btnText="Delete" clickHandler={() => {
          deleteHandler(index);
        }}/>
      )}
    </li>
  ));

  return <ul style={{ display: "inline-block" }}>{listItem}</ul>;
};

export default List;
