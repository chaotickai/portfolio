// require needed modules
const express = require('express');
const fetch = require("node-fetch")

const app = express();
const port = process.env.PORT || 3000
const endpoint = `https://swap.dev/api/people/`

// render home page
app.get('/', function(req, res) {
    res.render('home.ejs');
});

// render results
app.get('/results', function(req, res) {
    fetch(`${endpoint}${req.query.userNumber}`)
    .then(response=>{
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data=>{
        res.render(`results.ejs`, {
            name: data.name,
            height: data.height,
            hair_color: data.hair_color
        })
    })
    .catch(error=>res.render('error.ejs', {
        message: `There was an error finding what you wanted, please make sure you enter a valid number, ${error}`
    }))

});

app.get('*', (req, res)=>{
    res.render('error.ejs', {
        message: 'These are not the pages you are looking for'
    })
})

app.listen(3000, function() {
    console.log("Star Wars backend running on port 3000");
});