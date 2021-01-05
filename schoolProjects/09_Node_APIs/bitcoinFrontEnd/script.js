const btn = document.getElementById(`btn`)
const usd = document.getElementById(`USD`)
const gbp = document.getElementById(`GBP`)
const eur = document.getElementById(`EUR`)
var message = document.getElementById(`results`)

let url = `https://api.coindesk.com/v1/bpi/currentprice.json`

btn.addEventListener(`click`, ()=>{
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data => {
        if(usd.checked){
            message.innerHTML = `${data.bpi.USD.symbol} ${parseFloat(data.bpi.USD.rate.replace(/,/g, ``)).toFixed(2)}`
        }else if(gbp.checked){
            message.innerHTML = `${data.bpi.GBP.symbol} ${parseFloat(data.bpi.GBP.rate.replace(/,/g, ``)).toFixed(2)}`
        }else{
            message.innerHTML = `${data.bpi.EUR.symbol} ${parseFloat(data.bpi.EUR.rate.replace(/,/g, ``)).toFixed(2)}`
        }
    })
    .catch(error => console.log(`There was an error :(`, error))
})