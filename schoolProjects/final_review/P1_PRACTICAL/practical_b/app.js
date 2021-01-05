//Requireing necessary modules
const express = require('express');
const fetch = require('node-fetch')

//Initalizing instance of express
const app = express()
//Setting port to environment PORT with 3000 as a fallback
const port = process.env.PORT || 3000

//Setting static folder for express
app.use(express.static(`public`))

//Root route handler
app.get("/", (req,res)=>{
    //Setting offset for purposes of loading more gifs, it will be 0 to start with
    //Offset comes from the API documentation and is used to skip that number of gifs
    let offset = parseInt(req.query.offset)

    //If no offset is passed through queries, it will be set to 0 to show the first set of images
    if(req.query.offset == undefined){
        offset = 0
    }

    //Setting API endpoint for initial load of page
    let trending = `https://api.giphy.com/v1/gifs/trending?api_key=RRjuEIGnpY4OufnpsMLFcdOGPhqnRqqU&limit=24&offset=${offset}&rating=g`

    //Using node fetch for http requests to the API
    fetch(trending)
    .then(response => {
        //If there was an error with the request throw Error
        if(!response.ok){
            throw Error(response.statusText)
            
        }
        //If there is no error, parse the response and pass it along
        return response.json()
    })
    .then(results => {
        //Once the parsed data is recieved, pass it to the ejs template and then render it.
        res.render('index.ejs', {gifs: results.data, offset})
    })
    //Console log the error response if there was an error
    .catch(error => console.log(`There was an error`, error))
})

//Route handler for searches
app.get('/results', (req,res)=>{
    //Grabbing what was searched and assigning it for easier access
    let search = req.query.search.trim()
    //Setting offset for purposes of loading more images, it will be 0 to start with
    //Offset comes from the API documentation and is used to skip that number of gifs
    let offset = parseInt(req.query.offset)

    //If no offset is passed through queries, it will be set to 0 to show the first set of images
    if(req.query.offset == undefined){
        offset = 0
    }

    //Making sure the search query isn't empty, if it is, render the error page
    if(search.trim() == ""){
        res.render('error.ejs')
        return
    }

    //If it isn't empty, passing what was searched into the PI search endpoint
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=RRjuEIGnpY4OufnpsMLFcdOGPhqnRqqU&q=${search}&limit=24&offset=${offset}&rating=g&lang=en`

    //Using fetch to make the http request to the API
    fetch(endpoint)
    .then(response => {
        //If there was an error with the request throw Error
        if(!response.ok){
            throw Error(response.statusText)
            
        }
        //If there is no error, parse the response and pass it along
        return response.json()
    })
    .then(results => {
        
        //Once the parsed data is recieved, pass it to the ejs template and then render it.
        res.render('search.ejs', {gifs: results.data, offset, search})
    })
    //Console log the error response if there was an error
    .catch(error => console.log(`There was an error`, error))
})

//Listener for node app
app.listen(port, ()=>{
    //For human readability (not neccessary)
    console.log(`App listening on port: ${port}`)
})