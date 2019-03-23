import React, { Component } from "react";
// import { connect } from "react-redux";
import "./App.css";
// import { increment } from "./actions";

// const mapStateToProps = state => ({
//   count: state.count
// });

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    if (this.inputElement.value !== "") {
      // first thing i tried: 
      // this.state.items = [ this.inputElement.value, ...this.state.items ]
      this.setState((prevState) => {
        return {
          items: [ this.inputElement.value , prevState.items ]
        }
      })
      this.inputElement.value = ""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React TODO</h1>
        </header>
        <form onSubmit={this.addItem}>
          <input ref={(a) => this.inputElement = a} placeholder="Write a TODO here"></input>
          <button>+</button>
        </form>
        <ul>
          <li>test</li>
        </ul>
      </div>
    );
  }
}

export default App;
