import React from "react";

function TodoCard(props) {
  return (
    <li>
      {props.title}
      <button
        onClick={() => {
          props.deleteTodo(props.index);
        }}
      >
        Complete!
      </button>
    </li>
  );
}

export { TodoCard };
