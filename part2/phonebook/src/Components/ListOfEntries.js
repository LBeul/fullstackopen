import React from "react";

const ListOfEntries = ({ list }) => {
  return (
    <>
      <h3>Numbers</h3>
      <ul>
        {list.map(item => (
          <li key={item.name}>
            <strong>{item.name}</strong> {item.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListOfEntries;
