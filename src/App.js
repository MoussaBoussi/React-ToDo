import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Todos from "./todos"
import { increment } from "./actions";

const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  state = {
    todos: [
      "Learn Basics of React & Redux",
      "Create TODO app"
    ]
  }

  deleteTodo = index => {
    console.log(index)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO App</h1>
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
