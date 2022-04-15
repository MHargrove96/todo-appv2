import React, { Component } from "react";
import { TodoCard } from "./TodoCard";
import TodoInput from "./TodoInput";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      todosList: [],
    };
  }

  handleChange = (evt) => {
    this.setState({ userInput: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      todosList: [...this.state.todosList, this.state.userInput],
      userInput: "",
    });
  };
  deleteItem = (index) => {
    console.log(index, "was clicked");
    let listCopy = this.state.todosList;
    listCopy.splice(index, 1);
    this.setState({ TodoList: { ...listCopy } });
  };

  render() {
    return (
      <div className="App">
        <TodoInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todo={this.state.userInput}
        />
        <ol>
          {this.state.todosList.map((todo, index) => {
            return (
              <TodoCard
                key={index}
                title={todo}
                deleteTodo={this.deleteItem}
                index={index}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}
