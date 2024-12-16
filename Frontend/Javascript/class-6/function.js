// Function 

// function is a reusable block of code to perform some certain task

// todo print your name 
// function printName(){
//     console.log(`My name is Pritish `);
//     console.log(`My name is Purnima `);
// }
// printName();  // function call or invocation

// Argument and parameters  
function printName(none){
    console.log(`My Name is ${none}`);
}
printName("Purnima");

function PrintName(name,age,city){
    console.log(`my name is ${name}`);
    console.log(`my city name is ${city}`);
    console.log(`my age is ${age}`);
}
    PrintName("purnima","21","bbsr");
//return



function PrintName(name,age,city){
    return `my name is ${name}, ${age} ,${city}`;
    

}
let output =PrintName("purnima das" , 21,"bbsr");
console.log(output);

//syntax

console.log(PrintName("purnima")); //before
const PrintName =(name)=> {
    return `my name is ${name}`;

}
console.log(PrintName("purnima")); //after
