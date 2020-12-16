import React from 'react';

class Lobby extends React.Component {

    componentDidMount(){
        if(this.props.username === "" || this.props.room === ""){
            document.querySelector(".nickname").style.display = 'initial'
        }
    }

    componentWillUnmount(){
        console.log('Component has unmounted')
        this.props.handleDisconnect()
    }

    handleEnter = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();

            this.props.handleSendMessage();
        }
    }

    render(){
        return(
            <div>
                <div className="nickname">
                    <div className="nickname__header">
                        <h2>Welcome!</h2>
                    </div>
                    <div className="nickname__input-container">
                        <input type="text" name="username" value={this.props.username} placeholder="Enter Username" autoComplete="off" onChange={this.props.handleChange} />
                        <button onClick={this.props.handleRoomLaunch} className="nickname__submit">Submit</button>
                    </div>
                </div>

                <h1>Your room id is: {this.props.room}</h1>
                <h1>Live Chat:</h1>
                <input type="text" name="message" value={this.props.message} placeholder="New Message" autoComplete="off"
                    onChange={this.props.handleChange} onKeyUp={this.handleEnter} />
                <button onClick={this.props.handleSendMessage}>Send</button>
                    { this.props.chat.map((m,i) => <p key={i}>{m}</p>) }
                <div>
                    <ul>
                        { this.props.lobby.map((m,i) => <li key={i}>{m}</li>) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Lobby;