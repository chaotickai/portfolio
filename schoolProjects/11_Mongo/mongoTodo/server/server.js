const express = require("express");
const app = express();

app.use(express.static(`./client`))

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000;
const log = console.log


// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
const mongoose = require(`mongoose`)
//    b) connect
const url = "mongodb://localHost:27017/mongo_todo_list"

mongoose.connect(url, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>log(`Connected to the ${url} database`))
    .catch((err)=>{log(`There was a connection error :(`, err)})


// 2) Build blueprints
//    a) Schema
var todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, `Description of todo is required`]
    },
    isComplete: {
        type: Boolean,
        default: false
    }
})

//    b) Model
var TodoModel = mongoose.model("Todo", todoSchema)

// 3) Build queries
//    a) Read with Mongoose
app.get("/todos", function (req, res) {
    TodoModel.find({}, (err, results)=>{
        if(err){
            log(`There was a find error :(`, err)
        }else{
            log(`Here are the results`, results)
            res.status(220).json(results)
        }
    })
});

//    b) Create with Mongoose
app.post("/todos", function (req, res) {
    let newTodo = new TodoModel({
        description: req.body.description
    })

    newTodo.save((err, result)=>{
        if(err){
            log(`There was a save error :(`, err)
        }else{
            log(`New todo saved!`, result);
            res.status(201).json(result)
        }
    })
});

//    c) Delete with Mongoose
app.delete("/todos/:id", (req, res) => {
    let requestedToDoId = req.params.id;

    TodoModel.findByIdAndDelete(requestedToDoId, (err, result)=>{
        if (err) {
            log(`There was a delete wrror :(`, err)
            res.status(400).send('Id does not exist for deletion')
        } else {
            log(`Deleted document`, result)
            res.status(201).send(result)
        }
    })
})

//    d) Update with Mongoose
app.put("/todos/:id", (req, res) => {
    // get the requestedToDoId from req.params and ensure it is a number
    let requestedToDoId = req.params.id;

    // find the affected todo item
    TodoModel.findById(requestedToDoId, (err, result)=>{
        if (err) {
            log(`There was an update error :(`, err)
            res.status(666).send('Id does not exist for updating')
        } else {
            result.isComplete = !result.isComplete
            result.save((err, updatedTodo)=>{
                if (err) {
                    res.status(667).send(`Cannot update document`)
                } else {
                    res.status(202).send(updatedTodo)
                }
            })
        }
    })
})


app.get("/", function (req, res) {
    res.sendFile("index.html");
});


app.listen(port, () => {
    console.log(`Listen on port ${port}`);
})