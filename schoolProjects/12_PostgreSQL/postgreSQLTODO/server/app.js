const express = require('express');
const logger = require('morgan');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const debug = require('debug')('server');

const app = express()
const port = process.env.PORT || 3000

app.use(logger(`dev`, {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
app.use(express.static(`../client`))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connection
const connectionObject = {
    host: "pgdb.accsoftwarebootcamp.com",
    database: "accsoftwarebootcamp",
    port: 5432,
    user: "acc",
    password: "accrocks",
};
const client = new Client(connectionObject)

client.connect()
.then(() => debug(`PG connect to ${client.database} database`))
.catch((err) => console.log(`PG connection error: ${err.stack}`))

//READ
app.get(`/todos/:user_id`, (req, res)=>{
    let query = `SELECT id AS _id, 
                        description, 
                        iscomplete AS "isComplete"
                FROM    todos.todos
                WHERE   todos.user_id = ${req.params.user_id};`
    client.query(query, (error, data) => {
        error ? res.status(444).send(`Error retrieving todos: ${error}`) : res.send(data.rows)
    })
})

//CREATE
app.post(`/todos/:user_id`, (req, res)=>{
    let desc = req.body.description
    if(!desc){
        res.status(411).send(`Empty todo recieved!`)
    }
    let query = `INSERT INTO todos.todos
                (description, iscomplete, user_id)
                VALUES('${desc}', false, ${req.params.user_id})
                RETURNING   id AS _id,
                            description,
                            iscomplete;`
    client.query(query, (error, todos) => {
        error 
        ? res.status(445).send(`Error creating todo: ${error}`) 
        : null; 
        res.send(todos.rows[0])
    })
})

//DELETE
app.delete(`/todos/:id`, (req, res)=>{
    let query = `DELETE FROM todos.todos
                WHERE todos.id = ${req.params.id};`;
    client.query(query, (error, result)=>{
        if(error){
            res.status(555).send(`There was a deletion error: ${error}`)
            console.log(error.stack)
        }
        res.send(`You deleted!`)
    })
})

//UPDATE
app.put(`/todos/:id`, (req, res)=>{
    let query = `UPDATE todos.todos
                SET     iscomplete = NOT iscomplete
                WHERE   todos.id = ${req.params.id} RETURNING *;`
    client.query(query, (error, result)=>{
        if(error){
            console.log(error.stack)
            res.send(error.stack)
        }
        res.send(`Updated!`)
    })
})

module.exports = app

// app.listen(port, ()=>{
//     console.debug(`App listening on port ${port}`)
// })