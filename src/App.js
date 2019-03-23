import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { increment } from "./actions";

const mapStateToProps = state => ({
  count: state.count
});

class App extends Component {
  testAction = payload => {
    this.props.dispatch(increment(payload));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
        </header>

        <pre>Counter: {this.props.count}</pre>

        <button onClick={() => this.testAction(1)}>+</button>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
