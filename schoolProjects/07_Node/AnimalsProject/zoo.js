const animals = require('animals');
const Log = require('log.pets');

const full = animals.words;

console.log(animals());

console.log(Log.lion());

console.log(Log.zoo(animals(), animals(), animals()));

console.log(`# of animals in generator: ${full.length}`);

var G = function() {
    if(full.filter(name => name.startsWith("G")).length > 0 ) {
        return full.filter(name => name.startsWith("G")).length
    }else {return 'No matches found'}
};

console.log(`# of animals starting with "G": ${G()}`);

var allG = function() {
    if(full.filter(name => name.toUpperCase().startsWith("G")).length > 0 ) {
        return full.filter(name => name.toUpperCase().startsWith("G")).length
    }else {return 'No matches found'}
};

console.log(`# of animals starting with G: ${allG()}`);