import React from "react";

import { connect } from "react-redux";
import { delete_todo } from "./actions"
import "./todos.css";

const mapStateToProps = state => ({
    todos: state
});

class Todos extends React.Component {
    deleteTodo(index) {
        this.props.dispatch(delete_todo(index));
    }

    render() {
        return this.props.todos.length ? (
            this.props.todos.map((todo, index) => {
                return(
                    <div key={ index } class="todo_container">
                        <p>{ todo }</p>
                        <button class="delete" onClick={() => {this.deleteTodo(index)}}>Delete</button>
                    </div>
                )
            })
        ) : (
            <p>No Todos Left </p>
        )
    }
}

export default connect(mapStateToProps)(Todos);