import Button from "../Button/Button";
import styles from "./List.module.css";

const List = ({ list, isDoneHandler, deleteHandler }) => {
  // ['a','b','c'] ==> [<li key="">a</li>, <li key="">b</li>, <li key="">c</li>]

  const listItem = list.map((task, index) => (
    <li
      key={index}
      className={
        task.isDone
          ? `${styles.doneItem} ${styles.itemContainer}`
          : styles.itemContainer
      }
    >
      {task.item}{" "}
      {!task.isDone && (
        <Button
          btnClass={styles.actionBtn}
          btnText="Done"
          clickHandler={() => {
            isDoneHandler(index);
          }}
        />
      )}
      {task.isDone && (
        <Button
          btnClass={styles.actionBtn}
          btnText="Delete"
          clickHandler={() => {
            deleteHandler(index);
          }}
        />
      )}
    </li>
  ));

  return <ul className={styles.ulContainer}>{listItem}</ul>;
};

export default List;
