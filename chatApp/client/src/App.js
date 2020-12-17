import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { initiateSocket, disconnectSocket, subscribeToChat, sendMessage, loadData, myDisconnect } from './Socket';

import Navigation from './components/Navigation';
import ChatHome from './components/ChatHome';
import Lobby from './components/Lobby';

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
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSetRoom = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for ( var i = 0; i < 6; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    this.setState({
      room: result
    })
  }

  handleJoinRoom = () => {
    if(!/^([A-Z0-9]{6}?)$/.test(this.state.roomCode)){
      alert("Sorry, that is an invalid room code :(")
    }

    this.setState({
      room: this.state.roomCode
    })
  }

  handleRoomLaunch = () => {
    initiateSocket(this.state.room, this.state.username)

    subscribeToChat((err, data) => {
      if(err) return;

      console.log("This is the data", data)

      this.setState({
        chat: data,
        message: ''
      })
    });

    loadData((err, history)=>{
      if(err) return;
      console.log('This is the history', history)
      if(history.chats !== undefined){
        this.setState({
          chat: history.chats
        })
      }
      if(history.lobby !== undefined){
        this.setState({
          lobby: history.lobby
        })
      }
    })

    sendMessage(this.state.room, `${this.state.username} has joined!`)

    document.querySelector(".nickname").style.display = 'none'
  }

  handleDisconnect = () => {
    sendMessage(this.state.room, `${this.state.username} has disconnected...`)
    myDisconnect(this.state.room, this.state.username)
    disconnectSocket()


    this.setState({
      room: '',
      username: '',
      roomCode: '',
      chat: [],
      lobby: []
    })
  }

  handleSendMessage = () => {
    sendMessage(this.state.room, `${this.state.username}: ${this.state.message}` )
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/chat" exact render={()=>(
              <ChatHome
                handleChange={this.handleChange}
                handleSetRoom={this.handleSetRoom}
                handleJoinRoom={this.handleJoinRoom}
                roomCode={this.state.roomCode}
                username={this.state.username}
              />
            )} />
            <Route path="/lobby" exact render={()=>(
              <Lobby
                room={this.state.room}
                host={this.state.host}
                chat={this.state.chat}
                lobby={this.state.lobby}
                username={this.state.username}
                message={this.state.message}
                handleChange={this.handleChange}
                handleSendMessage={this.handleSendMessage}
                handleRoomLaunch={this.handleRoomLaunch}
                handleDisconnect={this.handleDisconnect}
              />
            )} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
