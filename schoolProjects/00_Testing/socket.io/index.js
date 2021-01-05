// Require express and initialize it
const express = require("express")

const app = express()

// Declare a port variable
const port = process.env.PORT || 3000

// Require socket.io and pass the server object to it
const io = require('socket.io')(
    app.listen(port, () => {
        console.log('App listening on port:', port)
    })
)

// Tell our app to use our client folder as static code
app.use(express.static('./client'))

// Set up a home route and send the client folder



// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', socket => {
    console.log('A new user connected')

    socket.on('New User', nickname => {
        console.log(nickname, "has joined the chat")
        io.emit('New User', nickname)
    })

    socket.on("New Message", data => {
        console.log(data.nickname, 'said', data.message)
        io.emit('New Message', data)
    })
})