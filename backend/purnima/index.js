
console.log("its working");

const math = require("./math");
console.log(math.add(5,6));
console.log(math.sub(8,4));
console.log(math.mul(9,1));
console.log(math.div(57,61));

//inbuilt module
const fs = require('fs');
console.log(fs);

//write file
fs.writeFileSync("note.txt","i am learning backend");
//append : add the string end of the file

fs.writeFileSync("its a part of MERN \N");

//read
const data = fs.writeFileSync("notes.txt");
console.log(data.toString());
//create a folder
fs.mkdirSync("file.js");
//rename

//fs.renameSync("file.js" ,"node.js")






