import React from "react";

const EntryForm = props => {
  return (
    <>
      <h3>Add new entry:</h3>
      <form>
        <div>
          name:{" "}
          <input value={props.nameValue} onChange={props.nameChangeHandler} />
        </div>
        <div>
          number:{" "}
          <input
            value={props.numberValue}
            onChange={props.numberChangeHandler}
          />
        </div>
        <div>
          <button type="submit" onClick={props.submitHandler}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default EntryForm;
