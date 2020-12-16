import React from 'react';
import { NavLink } from 'react-router-dom';

class ChatHome extends React.Component {
    handleEnter = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
    
            this.props.handleJoinRoom();
        }
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={this.props.handleSetRoom}><NavLink to="/lobby">Make A Lobby</NavLink></button>
                </div>
                <div>
                    <input type="text" name="roomCode" value={this.props.roomCode} placeholder="Enter Room Code" autoComplete="off"
                        onChange={this.props.handleChange} onKeyUp={this.handleEnter} />
                    <button onClick={this.props.handleJoinRoom}><NavLink to="/lobby">Join</NavLink></button>
                </div>
            </div>
        )
    }
}

export default ChatHome;