const express = require("express")
const request = require('request')

const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    request('https://www.dnd5eapi.co/api/races/', {json: true}, (err, res, body)=>{
        if(err) {return console.log(err)}
        console.log(body)
    })
    res.send("I'm alive!")
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})