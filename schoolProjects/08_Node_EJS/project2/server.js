const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const messages = [
    { name: "Jim", message: "I'm a cartoonist" },
    { name: "Jane", message: "How about pasta for dinner?" },
    { name: "Gary", message: "I like my pasta with butter" }
]

app.get(`/`, (req, res) => {
    res.send(`I am ALIVE`)
})

app.get(`/messages`, (req, res) => {
    res.render(`messages.ejs`, {messages})
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})