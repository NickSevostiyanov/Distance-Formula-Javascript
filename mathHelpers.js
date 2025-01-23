// |---------------------------------------------|
// |Nick-Sevostiyanov----------------------------|
// |Calculator-functions-for:--------------------|
// |d = √(x2 - x1)2 + (y2 - y1)2-----------------|
// |---------------------------------------------|

// For functions to be used by other scripts
module.exports = {
    formula,
    subtract,
    powerof,
    sum,
    root
}

// ----------------------------------------------
// Basic adder, divider, subtracter, square root

// Subtracts x2 - x1
function subtract(x1, x2) {
    return (x2 - x1);
}

// returns _ ^ 2
function powerof(sum) {
    return (sum * sum);
}

// Adds x + y
function sum(lhs, rhs) {
    return (lhs + rhs);
}

// Roots number
// number / number
function root(argument) {
    return (Math.sqrt(argument));
}
// |--------------------------------------------|
// |d = √(x2 - x1)2 + (y2 - y1)2--formula-------|
// |--------------------------------------------|

// distance between 2 points
// on a 2D plane or 3D space:
function formula(x1, y1, x2, y2) {
    // LHS subtract, ^2
    const lhs_bracket = subtract(x1, x2);
    const lhs_square = root(lhs_bracket);
    
    // RHS subtract, ^2
    const rhs_bracket = subtract(y1, y2);
    const rhs_square = powerof(rhs_bracket);

    // Add LHS + RHS
    const add_x_y = sum(lhs_bracket, rhs_bracket);

    // Square Root
    const square_root = root(add_x_y);

    return square_root;

}
