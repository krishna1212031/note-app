import React, { useState } from "react";

const Input = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
   setInput(event.target.value);
  }

  const resetHandler = () => {
    setInput("");
  }

  const addHandler = () => {
    const newNote = {note:input , id:new Date().toUTCString()}
    
    props.addNote(newNote);
    resetHandler();
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Note:
        </label>
        <textarea
          value={input}
          onChange = {inputHandler}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write Here..."
        ></textarea>
      </div>
      <div className="row">
        <div className="col d-grid gap-2">
          <button type="button" onClick = {addHandler} className="btn btn-primary">
            Add
          </button>
        </div>
        <div className="col d-grid gap-2">
          <button type="button" onClick = {resetHandler} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
