import React from 'react';
import '../App.css';

class EnterTodo extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input 
                type="text"
                name="newTodo"
                placeholder="Enter a todo"
                onChange={this.props.handleChange}
                value={this.props.newTodo}
                />
            </form>
        )
    }
}

export default EnterTodo