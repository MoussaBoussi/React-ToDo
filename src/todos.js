import React from "react";

const Todos = ({list, deleteTodo}) => {
    // if the todo list has a length then output each todo, otherwise output There are no Todos
    // list.map will take each individual item in the list and return a div with the text inside
    // React requires a key in order to keep track of each item in the array.
    const todoList = list.length ? (
        list.map(todo => {
            return (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => {deleteTodo(todo.id)}}>DELETE</button>
                </div>
            )
        })
    ) : (
        <p>There are no Todos</p>
    )

    return(
        <div className="todos">
            { todoList }
        </div>
    )
}

export default Todos;