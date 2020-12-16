const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.static("../client"));
app.use(logger('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

const PORT = process.env.PORT || 3001;

const io = require('socket.io')(
    app.listen(PORT, () => {
      console.log(`CORS-enabled app listening on port ${PORT}.`);
    })
  )

var socketHistory = {}

io.on('connection', (socket) => {
    let socketRoom = ''
    let user = ''

    console.log(`Connected: ${socket.id}`)

    socket.on('disconnect', () => {
        console.log(`Disconnected: ${user}`)
    })

    socket.on('userDisconnected', (data) => {
        console.log('Before disconnect', socketHistory[socketRoom])
        socketHistory[socketRoom].lobby = socketHistory[socketRoom].lobby.filter(name => name !== data.username)

        if(socketHistory[socketRoom].lobby.length == 0){
        delete socketHistory[socketRoom]
        }
        console.log('After disconnect', socketHistory[socketRoom])
        io.to(data.room).emit('userJoined', socketHistory[socketRoom])
    })

    socket.on('join', (data) => {
        console.log(`Socket ${socket.id} (Username: ${data.username}) joining room ${data.room}`)
        socket.join(data.room)

        user = data.username
        socketRoom = data.room

        socketHistory[socketRoom] = socketHistory[socketRoom] ? socketHistory[socketRoom] : {}
        socketHistory[socketRoom].lobby = socketHistory[socketRoom].lobby ? 
        [...socketHistory[socketRoom].lobby, user] : [user]

        io.to(data.room).emit('userJoined', socketHistory[socketRoom])
    })

    socket.on('chat', (data) => {
        const { room, message } = data

        socketHistory[socketRoom].chats = socketHistory[socketRoom].chats ? 
        [message, ...socketHistory[socketRoom].chats] : [message, 'Welcome to Quick Think!']


        console.log(`msg: ${message}, room: ${room}`)
        io.to(room).emit('chat', socketHistory[socketRoom].chats)
    })
})