// |----------------------------------------------------|
// |Nick-Sevostiyanov-----------------------------------|
// |Javascript-formula-for: d = √(x2 - x1)2 + (y2 - y1)2|
// |----------------------------------------------------|


// Get functions from mathHelpers.js
const mathHelpers = require('./mathHelpers.js');

// necessary modules
const fs = require('fs');
const path = require('path');

// Reads inputs from terminal
const process = require("process");
const arguments = process.argv;
    // console.log(arguments);


// Creates .txt 'points'
// Creates Dir 'dataPoints'
function processInput(userInput, callback) {
    const dirPath = path.join(__dirname, 'dataPoints');

    // File System Module
    fs.mkdir(dirPath, { recursive: true}, (err) => {
        if (err) {
            // If an error occurs when making Dir
            console.log('Error in creating directory', err);
            return;
        }

        // Write inputs to points.txt inside 'dataPoints'
        const filePath = path.join(dirPath, 'points.txt');

        // Add spaces to input points
        fs.writeFile(filePath, userInput.join(' ') + '\n', {flag: 'a'}, (err) => {
            if (err) {
                // If an error occurs when writing file
                console.log('Error writing to file', err);
                return;
            }

            // If points.txt works
            console.log('Content saved');


            callback();
        });
    });
}


// Read inputs from points.txt
function readpoints(callback) {
    const filePath = path.join(__dirname, 'dataPoints', 'points.txt');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // If an error occurs when reading file
            console.log('Error reading file', err);
            return;
        }

        // Parse data to extract numbers
        const lines = data.split('\n').filter(line => line.trim() !== '');

        lines.forEach(line => {

            const numbers = line.split(' ').map(Number);
            if (numbers.length !== 4) {
                // If there are more than 4 numbers given
                console.log('File should contain exactly 4 numbers');
                return;
            }
    
            // Takes 4 numbers and gives it to assigned variables
            const [x1, y1, x2, y2] = numbers;
    
            // Gives variables to formula function from mathHelpers.js
            const result = mathHelpers.formula(x1, y1, x2, y2);
    
            // Display result
            
            console.log('The distance between your two points: ','(',x1,y1,')','(',x2, y2,')','is:', result);
        });

        callback();
    });
}



// Checks for if x1, y1, x2, y2 is given
if (arguments.length !== 6) {
    console.log('Please input 4 numbers');
    console.log('E.g: node main.js 1 2 3 4');
} else {
    // Convert string from array to numbers
    const x1 = parseFloat(arguments[2]);
    const y1 = parseFloat(arguments[3]);
    const x2 = parseFloat(arguments[4]);
    const y2 = parseFloat(arguments[5]);
    
    
    
    // Gives userinputs to processinput
    const userInput = [x1, y1, x2, y2];
    
    processInput(userInput, () => {
        readpoints(() => {
            console.log('Processing complete.');
        });
    }); 
}
    // Slight delay to ensure 
    // points.txt written = true
    // process after points.txt is written
//     setTimeout(() => {
//         readpoints();
//     }, 500);
// }
    
