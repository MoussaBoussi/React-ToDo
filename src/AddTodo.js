import React, { Component } from "react";

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            content: ""
        }
    }
    
    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add New Todo:</label>
                <input type="text" onChange={this.handleChange}/>
                <button>ADD</button>
            </form>
        )
    }
}

export default AddTodo;