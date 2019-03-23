import React, { Component } from "react";

const todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map((todo, index) => {
            return(
                <div key={ index }>
                    <p>{ todo }</p>
                    <button onClick={() => {deleteTodo(index)}}>Delete</button>
                </div>
            )
        })
    ) : (
        <p>No Todos Left </p>
    )

    return (
        <div>
            { todoList }
        </div>
    )
}

export default todos;