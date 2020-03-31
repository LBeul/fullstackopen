import React from "react";

const Entry = ({ entry, deleteEntry }) => (
  <li>
    <strong>{entry.name}</strong> {entry.number}{" "}
    <button onClick={deleteEntry}>Delete</button>
  </li>
);

export default Entry;
