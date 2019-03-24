import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Todos from "./todos";
import AddTodo from "./AddTodo";


const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>TODO App</h1>
          </header>
          <Todos />
          <AddTodo />
        </div>
      );
  };
};

export default connect(mapStateToProps)(App);
