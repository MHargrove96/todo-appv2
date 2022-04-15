import React from "react";

const TodoInput = (props) => {
  console.log(props)
  console.log(props.userInput)
  return (
    <section>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="userInput">New ToDos: </label>
        <input
          type="text"
          value={props.todo}
          onChange={props.handleChange}
        ></input>
        <button type="submit">Submit!</button>
      </form>
    </section>
  );
};

export default TodoInput;
