var marvel = require('marvel-characters');

var full = marvel.characters;

console.log(`Random character = ${marvel()}`);

console.log(`The database conatins ${full.length} characters`);

console.log(full.filter(name => name.startsWith("Man")));

const ironman = function() {
    if(full.includes("Iron Man") === true){
        console.log(['Iron Man']);
    }else {console.log("No matches found")}
};

ironman();

const batman = function() {
    if(full.includes("Batman") === true){
        console.log(['Batman']);
    }else {console.log("No matches found")}
};

batman();
