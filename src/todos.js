import React, { Component } from "react";

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, deleteTodo } = this.props

        return todos.length ? (
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
    }
}

export default Todos;