import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "./TodoItem";
import { Grid, Paper } from "@material-ui/core";
import Container from '@material-ui/core/Container';

import "../App.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function NewList() {

    const classes = useStyles();

    const [newTodoItem, setTodoItem] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTodoItem(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
    
        setTodos([
            ...todos,
            { name: newTodoItem, complete: false },
          ]
        );
        setTodoItem("");
    }
    
    const deleteTodo = (index) => {
        // this.state.todos[index]
        // array.splice(index, 1)
    
        const newTodoArray = [...todos];
        newTodoArray.splice(index, 1);
    
        setTodos(newTodoArray);
    }
    
    const markComplete = (index) => {
        const newTodoArray = [...todos];
        newTodoArray[index] = { name: newTodoArray[index].name, complete: true };
    
        setTodos(newTodoArray);
    }
    
    
    return (
        <div className={classes.root}>
            <Container>

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
            <div className="TodoContainer">
            <div className="TodoHeader">
                <h4>My ToDo List</h4>
                <div>
                <form onSubmit={addTodo}>
                    <label>
                    New Todo:
                    <input
                        type="text"
                        name="newtodo"
                        value={newTodoItem}
                        onChange={(event) => {handleChange(event)}}
                    />
                    </label>
                    <button type="submit">Add Todo</button>
                </form>
                </div>
            </div>

            <list>
                {todos.map((todo, index) => {
                    return (
                        <item>
                            <TodoItem
                                id={index}
                                name={todo.name}
                                complete={todo.complete}
                                onDelete={deleteTodo}
                                onComplete={markComplete}
                            />
                        </item>
                    );
                })}
            </list>
            </div>
            </Container>
        </div>
    )
}
