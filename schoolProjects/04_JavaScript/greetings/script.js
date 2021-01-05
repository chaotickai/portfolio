var name = prompt("What's your name?");
var snack = prompt("What's your favorite snack?");
var drink = prompt("What's your favorite drink?");

if(name=="" || snack=="" || drink=="") {
    document.write("You don't follow instructions very well, huh?");
} else {
    document.write("Hi there " + name + " it seems that you enjoy eating " + snack + " and drinking " + drink);
}