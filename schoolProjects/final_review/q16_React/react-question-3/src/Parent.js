import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  render(){
    return (
      <div>
        <Child handleChange={this.handleChange} />
        Hello {this.state.name}
      </div>
    )
  }
}

export default Parent