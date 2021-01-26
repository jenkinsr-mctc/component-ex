import React, { Component } from "react";
import "../App.css";

export default class TodoItem extends Component {
  render() {
    return (
      <div
        className={
          this.props.complete ? "TodoItem TodoDone" : "TodoItem TodoNotDone"
        }
      >
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
