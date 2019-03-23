import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Todos from "./todos"
import { increment } from "./actions";

const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
        "Learn Basics of React & Redux",
        "Create TODO app"
      ]
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO App</h1>
        </header>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
