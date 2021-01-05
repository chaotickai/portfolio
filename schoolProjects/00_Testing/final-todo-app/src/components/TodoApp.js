import React from 'react';
import '../App.css';
import TodoList from './TodoList'
import EnterTodo from './EnterTodo'

class TodoApp extends React.Component{
    render(){
        return(
            <div>
                <h3>Todo App</h3>
                <TodoList 
                    items={this.props.items}
                    toggleComplete={this.props.toggleComplete} 
                />
                <EnterTodo 
                    handleChange={this.props.handleChange} 
                    handleSubmit={this.props.handleSubmit}
                    newTodo={this.props.newTodo}
                />
            </div>
        )
    }
}

export default TodoApp