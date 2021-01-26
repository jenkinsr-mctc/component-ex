import React, { Component } from "react";
import TodoItem from "./TodoItem";

import "../App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      todos: [
        { name: "Install VSCode", complete: true },
        { name: "Install Nodejs", complete: true },
        { name: "Setup Github Acct", complete: true },
        { name: "Install Prettier", complete: false },
        { name: "Win at IT242", complete: false },
        { name: "Take a rest", complete: false },
      ],
      newTodoItem: "",
    };
  }

  addTodo(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ ...this.state.todos, newTodoItem: event.target.value });
  }

  componentDidUpdate() {
    console.log(this.state.newTodoItem);
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
            {this.state.todos.map((todo) => {
              return (
                <item>
                  <TodoItem name={todo.name} complete={todo.complete} />
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
