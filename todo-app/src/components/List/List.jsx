import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./List.module.css";

const List = ({
  list,
  isDoneHandler,
  deleteHandler,
  swapItemHandler,
  isEditingHandler,
}) => {
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
      {!task.isEditing && (
        <>
          <label> {task.item}</label>
          <Button
            btnText="Edit"
            btnClass={styles.actionBtn}
            clickHandler={() => {
              isEditingHandler(index);
            }}
          />
        </>
      )}

      {task.isEditing && (
        <>
          <Input value={task.item}/>
          <Button btnClass={styles.actionBtn} btnText="Save" />
          <Button btnClass={styles.actionBtn} btnText="Cancel" />
        </>
      )}

      <Button
        btnText="UP"
        btnClass={styles.actionBtn}
        clickHandler={() => {
          swapItemHandler(index, index - 1);
        }}
        isDisable={index === 0}
      />
      <Button
        btnText="DOWN"
        btnClass={styles.actionBtn}
        clickHandler={() => {
          swapItemHandler(index, index + 1);
        }}
        isDisable={index === list.length - 1}
      />
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
