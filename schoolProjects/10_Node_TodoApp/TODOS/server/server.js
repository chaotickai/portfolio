const express = require(`express`)
const logger = require(`morgan`)
const chalk = require(`chalk`)
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(logger(`dev`))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var toDoArray = [
    {
    id: 1,
    description: `Call mom`,
    isComplete: false
    },
    {
    id: 2,
    description: `Buy groceries`,
    isComplete: false
    },
    {
    id: 3,
    description: `Go to movies`,
    isComplete: false
    }
]

app.get(`/`, (req, res) => {
    res.send(`I am ALIVE`)
})

let num = 4

app.route(`/todos`)
    .get((req, res) => {
    res.send(toDoArray)
    })
    .post((req, res) =>{
        let newPost = {
            id: num ++, 
            description: req.body.description, 
            isComplete: false
        }
        toDoArray.push(newPost)
        res.status(201).send(newPost)
    })

app.route(`/todos/:id`)
    .delete((req, res) => {
        let reqId = parseInt(req.params.id)

        let index = toDoArray.findIndex((element) => {
            return (element.id === reqId)
        })

        if(index >= 0){
            let deleted = toDoArray.splice(index, 1)
            res.status(200).send(deleted)
        } else {
            res.status(444).send(`Id does not exist for deletion`)
        }
    })
    .put((req, res) => {
        let reqId = parseInt(req.params.id)

        let index = toDoArray.findIndex((element) => {
            return (element.id === reqId)
        })
        
        if(index >= 0){
            toDoArray[index].isComplete = !toDoArray[index].isComplete
            res.status(200).send(`isComplete for ${reqId} is now ${toDoArray[index].isComplete}`)
        } else {
            res.status(400).send(`Id does not exist for update`)
        }
})

app.listen(port, () => {
    console.log(`App listening on port ${chalk.cyanBright(port)}!`)
})