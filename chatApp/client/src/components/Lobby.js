import React from 'react';

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

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
        if(event.keyCode === 13 && this.props.message !== "") {
            event.preventDefault();

            this.props.handleSendMessage();

            document.querySelector(".lobby__chat").scrollTop = document.querySelector(".lobby__chat").scrollHeight
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
                        <Form.Control type="text" name="username" value={this.props.username} placeholder="Enter Username" autoComplete="off" onChange={this.props.handleChange} />
                        <Button onClick={this.props.handleRoomLaunch} className="nickname__submit">Submit</Button>
                    </div>
                </div>
                
                <Container fluid className="lobby">
                    <Row>
                        <h1 className="lobby__roomCode">Your room id is: {this.props.room}</h1>
                    </Row>
                    <Row className="lobby__content">
                        <Col className="lobby__chatBox">
                            <Container fluid className="lobby__chat">
                                { this.props.chat.map((m,i) => <p key={i}>{m}</p>) }
                                <Form.Control className="lobby__messageInput" type="text" name="message" value={this.props.message} placeholder="New Message" autoComplete="off"
                                    onChange={this.props.handleChange} onKeyDown={this.handleEnter} />
                            </Container>
                        
                        </Col>

                        <Col className="lobby__userBox">
                            <Container fluid className="lobby__userContainer">
                                <ListGroup className="lobby__userList">
                                    { this.props.lobby.map((m,i) => <ListGroup.Item className="lobby__user" key={i}>{m}</ListGroup.Item>) }
                                </ListGroup>
                            </Container>
                        </Col>
                    </Row>     
                </Container>
            </div>
        )
    }

}

export default Lobby;