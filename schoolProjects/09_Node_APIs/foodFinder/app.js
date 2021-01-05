const express = require(`express`)
const yelp = require(`yelp-fusion`)

const app = express()
const port = process.env.PORT || 3000
const client = yelp.client('ZqQ3QCq369TMCfsuZAGSQgaIqa-PbkN4K4tTHJkjR2KD5jtY0ODpBLq__sdzVjBl27KyY_FFn_NleFStCIT2s845TsXWEXZ6DyrpB-bleBwFujzLNFOk9p1shr7mXnYx')

app.use(express.static('public'))

app.get(`/`, (req, res) => {
    res.render(`home.ejs`)
})

app.get(`/results`, (req, res) => {
    client.search({
        location: req.query.location,
    }).then(response => {
        res.render(`results.ejs`, {data: response.jsonBody.businesses})
    }).catch(e => {
        console.log(e);
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})