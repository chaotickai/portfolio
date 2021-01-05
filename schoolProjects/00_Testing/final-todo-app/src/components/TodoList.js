import React from 'react';
import '../App.css';

class TodoList extends React.Component{
    render(){
        return(       
            <div className="App">
                <ul>
                    {this.props.items.map((todo)=>{
                        let classString = todo.isComplete ? 'completed' : ''
                    return (
                        <li 
                            className={classString}
                            key={todo._id}
                            onClick={()=>{
                                this.props.toggleComplete(todo._id)
                            }}
                        >
                            {todo.description}
                        </li>
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList