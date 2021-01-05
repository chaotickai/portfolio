const express = require(`express`)
const fetch = require(`node-fetch`)

const app = express()
const port = process.env.PORT || 3000
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a52c64013adb0cf35b5894d89ed53ae9&language=en-US&page=1`
const img = `https://image.tmdb.org/t/p/w500/`

app.use(express.static(`public`))

app.get(`/`, (req, res)=>{
    res.render(`home.ejs`)
})

app.get(`/results`, (req, res)=>{
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data=>{
        data.results.pop()
        res.render(`results.ejs`, {
            movies: data.results,
            imgsrc: img
        })
    })
    .catch(error=>console.log(`There was an error :(`, error))
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}!`)
})