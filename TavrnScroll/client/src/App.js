import React from 'react'
import AddNPC from './components/AddNPC'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      room: '',
      roomCode: '',
      username: '',
      message: '',
      chat: [],
      lobby: []
    }
  }

  render(){
    return(
      <AddNPC></AddNPC>
    )
  }
}

export default App;
