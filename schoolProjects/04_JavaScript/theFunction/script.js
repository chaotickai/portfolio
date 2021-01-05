// function math(){
//     var name = prompt("Tell me your name.")
//     var num1 = parseInt(prompt("Give me a number."))
//     var num2 = parseInt(prompt("Give me another number."))
    
//     document.write("You are going to have a wonderfull day, " + name + ".")
//     document.write(" By the way, the sum of your numbers is " + (num1 + num2) + ".")
// }

// math()

function greeting(name){
    document.write(`You are going to have a wonderfull day, ${name}.`);
}

function math(num1, num2){
    document.write(` By the way, the sum of your numbers is ${num1 + num1} .`);
}

greeting(
    name = prompt("Tell me your name.")
)
math(
    num1 = parseInt(prompt("Give me a number.")),
    num2 = parseInt(prompt("Give me another number."))
)