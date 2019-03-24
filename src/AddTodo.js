import React, { Component } from "react";
import { connect } from "react-redux";
import { post_todo } from "./actions";

const mapStateToProps = state => ({
    todos: state
});

class AddTodo extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            content: ""
        }
    }
    
    onChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let payload = this.state.content
        this.props.dispatch(post_todo(payload));
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>Add New Todo:</label>
                <input type="text" onChange={this.onChange} value={this.state.content} />
                <button>ADD</button>
            </form>
        )
    }
}

export default connect(mapStateToProps)(AddTodo);