import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import axios from 'axios';
import {connect} from 'react-redux';

class App extends React.Component {
  //Runs once at the beginning and sets things up
  constructor(props){
    super(props)
    this.url = 'https://damp-cove-86735.herokuapp.com/todos'
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    if(!this.state.newTodo.trim) return;
    let newTodos = [
      ...this.state.todos, 
      {
        _id: Date.now(),
        description: this.state.newTodo,
        isComplete: false
      }
    ]
    this.setState({todos: newTodos, newTodo: ''})
  }

  toggleComplete = (_id) => {
    axios.put(this.url + "/" + _id)
    .then((res)=>{
      this.setState((stateCopy)=>{
        let index = stateCopy.todos.findIndex(
          (oneTodo => oneTodo._id === _id)
        )
  
        stateCopy.todos[index].isComplete = !stateCopy.todos[index].isComplete
  
        return stateCopy
      })
    })
    .catch((err)=>{
      this.setState(err)
    })
  }

  //Runs every time state or props change
  render(){
    return(
      <TodoApp 
        items={this.props.items}
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
        newTodo={this.props.newTodo}
        toggleComplete={this.toggleComplete}
      />
    )
  }
}

const mapStateToProps = state => (
  {items: state.todos}
)

export default connect(mapStateToProps)(App);