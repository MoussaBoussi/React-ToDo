import React, { Component } from "react";

export class Todos extends Component {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo (index) {
        console.log("delete")
        const todos = this.state.todos
        const newTodos = todos.slice(0, index).concat(todos.slice(index+1, todos.length))
    
        this.setState({
          todos: newTodos
        })
    }

    render() {
        const { todos } = this.props

        return todos.length ? (
            todos.map((todo, index) => {
                return(
                    <div key={ index }>
                        <p>{ todo }</p>
                        <button onClick={() => {this.deleteTodo(index)}}>Delete</button>
                    </div>
                )
            })
        ) : (
            <p>No Todos Left </p>
        )
    }
}



export default Todos;