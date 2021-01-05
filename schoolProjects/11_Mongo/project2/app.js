const mongoose = require("mongoose")

const url = "mongodb://localHost:27017/app_users"

mongoose.connect(url, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connected to DB"))
    .catch((err)=>{`There was a connection error :(`, err})

//BLUEPRINTS
    //SCHEMA
var userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,
    created:  {
        type: Date,
        default: Date.now()
    },
    member: {
        type: Boolean,
        required: [true, `Membership requirement not met`]
    }
})

    //MODEL
var UserModel = mongoose.model("User", userSchema)

//QUERIES
// UserModel.create({
//     username: "Nancy",
//     age: 22,
//     favorite_pizza: "pepperoni"
// }, (err, character)=>{
//     console.log(err ? err : character)
// })

UserModel.create({
    username: "Tommy",
    age: 22,
    favorite_pizza: "veggie"
}, (err, character)=>{
    console.log(err ? err : character)
})