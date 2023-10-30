import Button from "../Button/Button";

const List = ({ list, isDoneHandler }) => {
  // ['a','b','c'] ==> [<li key="">a</li>, <li key="">b</li>, <li key="">c</li>]

  const listItem = list.map((task, index) => (
    <li key={index}>
      {task.item}{" "}
      <Button
        btnText="Done"
        clickHandler={() => {
          isDoneHandler(index);
        }}
      />
    </li>
  ));

  return <ul style={{ display: "inline-block" }}>{listItem}</ul>;
};

export default List;
