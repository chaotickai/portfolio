Write a Javascript loop that will iterate from 40 to 60, both included, and log, if the number is ...

... odd or even.

Hint: think about using the modulus operator in Javascript.

for(let i = 40 ; i <= 60 ; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`)
    }else {
        console.log(`${i} is odd`)
    }
}