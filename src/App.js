import React, { Component } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { configureStore } from "./store";

const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  constructor(props){
    super(props)

    // state cannot be accessed unless the function is binded
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [
        "Learn Basics of React & Redux",
        "Create TODO app"
      ]
    }

  }

  addTodo(todo) {
    let todos = [ ...this.state.todos, todo ]
    this.setState({
      todos: todos
    })
  }

  deleteTodo(index) {
    const newTodos = this.state.todos.filter((item, i) => { return i !== index } );

    this.setState({
      todos: newTodos
    });
  } 

  render() {
      return (
        <Provider configureStore={configureStore}>
        <div className="App">
          <header className="App-header">
            <h1>TODO App</h1>
          </header>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
        </Provider>
      );
  };
};

export default connect(mapStateToProps)(App);
