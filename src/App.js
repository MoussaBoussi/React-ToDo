import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Todos from "./Todos"
import AddTodo from "./AddTodo"
import { increment } from "./actions";

const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  constructor(props){
    super(props)

    // state cannot be accessed unless the function is binded
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      todos: [
        "Learn Basics of React & Redux",
        "Create TODO app"
      ]
    }

  }

  deleteTodo(index) {
    const newTodos = this.state.todos.filter((item, i) => { return i !== index } );

    this.setState({
      todos: newTodos
    });
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO App</h1>
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo />
      </div>
    );
  };
};

export default connect(mapStateToProps)(App);
