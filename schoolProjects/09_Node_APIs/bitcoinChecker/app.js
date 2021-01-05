const express = require(`express`);
const fetch = require(`node-fetch`);

const app = express();
const port = process.env.PORT || 3000;
let endpoint = `https://api.coindesk.com/v1/bpi/currentprice.json`

app.use(express.static(`public`))

app.get(`/`, (req, res)=>{
    res.render(`index.ejs`, {symbol: ``, value: `Please select a currency`})
})
    
app.get(`/result`, (req, res)=>{
    fetch(endpoint)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText)
            
        }
        return response.json()
    })
    .then(data => {
        let currency = req.query.currencies
        res.render(`index.ejs`, {symbol: data.bpi[currency].symbol, value: parseFloat(data.bpi[currency].rate.replace(/,/g, ``)).toFixed(2)})
    })
    .catch(error => console.log(`There was an error`, error))
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
});