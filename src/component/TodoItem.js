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
        <h4>
          {this.props.id} {this.props.name}
        </h4>
        <div className="TodoButtons">
          {!this.props.complete && (
            <button
              onClick={() => {
                this.props.onComplete(this.props.id);
              }}
            >
              Done!
            </button>
          )}

          <button
            onClick={() => {
              this.props.onDelete(this.props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
