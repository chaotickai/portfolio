const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get(`/`, (req, res)=>{
    res.render(`home.ejs`, {
        pizza: `I like my pizza with pineapple!`
    })
})
app.get(`/about`, (req, res)=>{
    res.render(`about.ejs`, {
        cappuccino: `I like my cappuccino to be sweet.`
    })
})
app.get(`/contact`, (req, res)=>{
    res.render(`contact.ejs`, {
        fries: `I like my fries crispy with extra salt.`
    })
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})