// Build a search bar that filters a list of items based on user input.


import { useState } from "react";

export const Fourteen = ({items}) => {
  const [searchItem, setSearchItem] = useState("");

  const filterItems = items.filter((item)=>item.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <ul>
          {filterItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
