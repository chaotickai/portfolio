var numbers = [];
var sum = 0;

numbers.push(parseInt(prompt("Give me a number.")))
numbers.push(parseInt(prompt("Give me another number.")))
numbers.push(parseInt(prompt("Give me a number again.")))

for( i = 0; i < numbers.length ; i++ ){
    sum += numbers[i]
} 

document.write(`The sum or all your numbers is ${sum} .`)