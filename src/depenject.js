// For File Operations
let fs = require('fs');

// Storing the individual dependencies
let addDepenencies = (input) => {
    return input;
}

// Generates output file with injected dependencies
let generate = (input) => {
    output = '';
    input = flatten(input);
    input.forEach(element => {
        output += createRequire(element);
    });
    output += "\nlet stub = () => { \n"
    output += tryCatchFunc(input);
    output += "\n};";
    output += "\nmodule.exports = stub;";
    let writeStream = fs.createWriteStream('stub.js');
    writeStream.write(output);
    writeStream.end();
};