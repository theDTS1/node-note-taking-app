/* Importing the notes.js file and then calling the function getNotes() and printing it to the terminal*/
const getNotes = require("./notes.js");

const message = getNotes();
console.log("====================================");
console.log(message);
console.log("====================================");
