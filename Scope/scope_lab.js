// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
// console.log(globalVar); // Output: "I'm a global variable"
// console.log(globalLet); // Output: "I'm also global, but scoped with let"
// console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

//  ----------------------------------------
//  step 5
//  ----------------------------------------

// function show(){
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
// }

// show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError


//  ----------------------------------------
//  Practice
//  ----------------------------------------

// block scope variables
{
    var full_name_var = 'Sandip Maharaj';
    let fname_let = 'Sandip';
    const lname_const = 'Maharaj';

    // full_name = 'Sandip N Maharaj';
    // fname = 'Sandeep';
    // console.log(fname);

    // lname = 'Maharaja';
    // console.log(lname);
}

// reassign outside the block
full_name_var = 'Sandip N Maharaj';
console.log("full_name_var changed outside its block scope");

fname_let = 'Sandeep'; // should throu error but it is not
console.log("fname_let can not be changed outside its block scope");

lname_const = 'Maharaja';
console.log("lname_const can not be changed at all since its a constant");
