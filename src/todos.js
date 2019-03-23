import React from "react";

const Todos = ({list}) => {
    // if the todo list has a length then output each todo, otherwise output There are no Todos
    // list.map will take each individual item in the list and return a div with the text inside
    // React requires a key in order to keep track of each item in the array.
    const todoList = list.length ? (
        list.map(todo => {
            return (
                <div key={todo.id}>
                    <p>{todo.text}</p>
                </div>
            )
        })
    ) : (
        <p>There are no Todos</p>
    )

    return(
        <div class="todos">
            { todoList }
        </div>
    )
}

export default Todos;