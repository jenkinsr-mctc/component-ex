import React, { Component } from "react";
import TodoItem from "./TodoItem";

import "../App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.markComplete = this.markComplete.bind(this);

    this.state = {
      todos: [],
      newTodoItem: "",
    };
  }

  addTodo(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        { name: this.state.newTodoItem, complete: false },
      ],
      newTodoItem: "",
    });
  }

  handleChange(event) {
    this.setState({ ...this.state.todos, newTodoItem: event.target.value });
  }

  deleteTodo(index) {
    // this.state.todos[index]
    // array.splice(index, 1)

    const newTodoArray = [...this.state.todos];
    newTodoArray.splice(index, 1);

    this.setState({ ...this.state, todos: newTodoArray });
  }

  markComplete(index) {
    const newTodoArray = [...this.state.todos];
    newTodoArray[index] = { name: newTodoArray[index].name, complete: true };

    this.setState({ ...this.state, todos: newTodoArray });
  }

  componentDidUpdate() {
    // console.log(this.state.newTodoItem);
  }

  render() {
    return (
      <div className="App">
        <div className="TodoContainer">
          <div className="TodoHeader">
            <h4>My ToDo List</h4>
            <div>
              <form onSubmit={this.addTodo}>
                <label>
                  New Todo:
                  <input
                    type="text"
                    name="newtodo"
                    value={this.state.newTodoItem}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Add Todo</button>
              </form>
            </div>
          </div>

          <list>
            {this.state.todos.map((todo, index) => {
              return (
                <item>
                  <TodoItem
                    id={index}
                    name={todo.name}
                    complete={todo.complete}
                    onDelete={this.deleteTodo}
                    onComplete={this.markComplete}
                  />
                </item>
              );
            })}
          </list>
        </div>
      </div>
    );
  }
}

export default TodoList;
