import React, { Component } from "react";
import Todos from "./todos"
import "./App.css";


class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Learn React"},
      { id: 2, text: "Create Todo App"}
    ]
  }

  addItem(e) {
    console.log(this.inputElement.value)
    if (this.inputElement.value !== "") {
      let newItem = {
        text: this.inputElement.value,
        id: Date.now()
      }
      // first thing i tried: 
      // this.state.items = [ this.inputElement.value, ...this.state.items ]
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
      this.inputElement.value = ""
      console.log(this.state.items)
    }
    // prevents page from refreshing
    console.log("test")
    e.preventDefault()
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
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
        <Todos list={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
