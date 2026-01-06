// const fruits = ["Mango" , "Banana" , "Orange" , "Apple" , 4];


// let text = "World War II";
// let firstChar = text.indexOf("Worl");
// console.log(firstChar);



// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");

// console.log(segIndex);


// let a = "Muhammad Ilyas";
// console.log(a.charAt(a.length - 1));

let text = "World War II"; 
 var firstChar = text.indexOf("World War II");
 if (firstChar !== -1) {
 text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
 console.log(text);
 console.log(text.slice(0, firstChar));
 console.log(text.slice(firstChar + 12));
 }

 