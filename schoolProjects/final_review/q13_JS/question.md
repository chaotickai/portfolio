An isogram is a word that has no repeating letters, consecutive or non-consecutive. Write a function that determines whether a string that only contains letters is an isogram. Assume the empty string is an isogram. Ignore case of the letters.

For example, you should get the following ...

isIsogram( "Dermatoglyphics" ) == true  // since no letter is repeated 
isIsogram( "aba" )             == false
isIsogram( "moOse" )           == false // ignore letter case

### Question

A possible solution is attached here as `script.js` here. You may run it using the command `node script.js` on command line.  However it doesn't work, as it reports "hello" as an isogram, which it clearly is not (repeating "l"). Please fix and explain your fix.

Hint: You might need to use the debugger to fix this function so it does the right thing.

### Answer:
function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet
    var answer = true

    str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each unique letter
                answer = false     // if a repeat letter found, then not an isogram
            } // if not found, then the property is kept true
          strObj[letter] = letter
        }
    )
   return answer
}

var test = "Hello"

console.log(`${test} ${isIsogram(test) ? "is" : "is not"} an isogram.`)