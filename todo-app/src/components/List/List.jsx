const List = ({ list }) => {
  // ['a','b','c'] ==> [<li key="">a</li>, <li key="">b</li>, <li key="">c</li>]

  const listItem = list.map((task,index) => 
    <li key={index}>{task}</li>
  );

  return (
    <ul style={{ display: "inline-block" }}>
      {listItem}
    </ul>
  );
};

export default List;
