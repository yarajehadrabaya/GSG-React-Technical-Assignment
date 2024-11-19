// Task 2 & Task 3



// task 2:You are given an array of input. Write a function that calculates the total sum and the average of the input using the reduce method.
function calcSum(input) {

    // calculate the summation of the input using reduce method 
    const summation = input.reduce((num ,sum) => sum + num, 0);

    // calculate the avrage of the input 
    if (input.length > 0) {
        average = summation / input.length;
    }

    return { summation, average };
}


// ************************************************************************************************************************************************************************************************************************

// task 3:You are given an array of strings, some of which may be duplicates. Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values. 
function removeDup(inputString) {

    // to removes all duplicates from the array in constant time complexity and returns the array with unique values i used "set" object because it's only stores unique values
    const uniqueSet = new Set(inputString);
    
    // make new array to stores the unique result
    const result = [];
    for (const value of uniqueSet) {
        result.push(value);
    }
    return result;
    
}
