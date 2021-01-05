// Assingning paths of forms to variables for easy access
const lbsinput = $("#lbs")
const kginput = $("#kg")
const mlsinput = $("#mls")
const kminput = $("#km")

// Updates value of Kilograms field with conversion as you type or use arrows in Pounds field 
lbsinput.bind("keyup change", function(){
    // Using val getter inside a val setter to get real time numbers from user input in field for updating
    kginput.val((lbsinput.val() * 0.45359237).toFixed(2))
    // Used .toFixed(2) to limit number of decimals in final result to 2 for user experience
})

// Updates value of Pounds field with conversion as you type or use arrows in Kilograms field 
kginput.bind("keyup change", function(){
    // Using val getter inside a val setter to get real time numbers from user input in field for updating
    lbsinput.val((kginput.val() / 0.45359237).toFixed(2))
    // Used .toFixed(2) to limit number of decimals in final result to 2 for user experience
})

// Updates value of Kilometers field with conversion as you type or use arrows in Miles field 
mlsinput.bind("keyup change", function(){
    // Using val getter inside a val setter to get real time numbers from user input in field for updating
    kminput.val((mlsinput.val() * 1.609344).toFixed(2))
    // Used .toFixed(2) to limit number of decimals in final result to 2 for user experience
})

// Updates value of Miles field with conversion as you type or use arrows in Kilometers field 
kminput.bind("keyup change", function(){
    // Using val getter inside a val setter to get real time numbers from user input in field for updating
    mlsinput.val((kminput.val() / 1.609344).toFixed(2))
    // Used .toFixed(2) to limit number of decimals in final result to 2 for user experience
})