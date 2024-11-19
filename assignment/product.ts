// Tasks 4 and 5.  

// how to run TypeScript code:
// 1-install type script if not installed.
// 2-compiling TypeScript to JavaScript using this command on terminal :  tsc tasks.ts , This creates a js file [product.js] for it in the same directory.
// 3-run the JavaScript file using Node.js , on terminal you can use this command line:  node product.js 


// task4:

// define the product interface
interface Product {
    name: string; // name of the product
    price: number;//  price of the product
  }
  
  // creat a function to calculate the  the total price of all products  from an array of Product objects
  function getsum(items: Product[]): number {
  // use the reduce method to calculate the total sum 
    return items.reduce(
        // find the total sum  by adding each item price
        (sum, item) => sum + item.price,
        
        
        0 // start the sum from 0 
        );
  }
// ****************************************************************************************************************************************************************************************************************************************

// task 5:Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.  

// creat function that accepts a string and checks if it is a valid email address
function checkstr(input: string): boolean {
    //checks if the accepted string is valid email useing complex regex pattern to more closely comply with the RFC 5322 standard, this is the source i used to do it :https://www.mailercheck.com/articles/email-validation-javascript
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    // check if the input string match the patern using match method
    const match = input.match(pattern);   
    //convert the value of match to  boolean , if it is true "match the regx patern" thats mean the input string is valid email else it is false and not valid 
    return !!match; 
    // if the match method return an array that means the input  matches the regx pattern so it is converted to true using "!!" operator . 
    // if the match method return null that means  the input dosent match with the pattern so its converted to false using "!!" operator .
  }










  