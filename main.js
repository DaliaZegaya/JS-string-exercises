// function someFunction (myName) {
//     var spaceCounter= 0;
//     for (var i=0; i<myName.length;i++) {
//         if (myName[i]==" ") {
//             spaceCounter++
//         }
//     }
//     if (spaceCounter==0) {
//         myName[0].toUpperCase() + myName.slice(1)
//     }
//     else if (spaceCounter==1) {

//     }
//     else if (spaceCounter==2) {

//     }
//     console.log (myName)
// }
// someFunction (prompt("your name"))

// function exercise1 (myString) {
//     myString= myString.toUpperCase ()
//     return console.log (myString)

// }
// exercise1 ("dalia")

// function exercise2 (myString) {
//     for (var i=0; i<myString.length; i++) {
//         if (myString.length > 5) {
//             return console.log ("long")
//         }
//         else {
//             return console.log ("short")
//         }
//     }

// }
// exercise2 (prompt ("string"))

// function exercise3 (myString) {
//     for (var i=0; i<myString.length; i++) {
//         if (myString[i]=="a") {
//             return console.log (i)

//         }
//     }
//    return console.log ("not found")

// }
// exercise3 (prompt("string"))

// function exercise4 (myString) {
//     for (var i=0; i<myString.length; i++) {
//         if (myString[i]=="r") {
//             return console.log ("true")
//         }
//     }
//     return console.log ("false")
// }
// exercise4(prompt("string"))

// function exercise5 (myString, tav) {
//     for (var i= 0; i<myString.length; i++) {
//         if (myString[i]==tav) {
//             return console.log ("true")
//         }
//     }
//     return console.log ("false")

// }
// exercise5 ("dalia zegaya", "!")

// function exercise6 (myString, tav) {
//     for (var i=0; i<myString.length; i++) {
//         if (myString[i]==tav) {
//             return console.log(i);
//         }
//     }
//     return console.log ("No Tav")

// }
// exercise6("hello !world", "!")

// function exercise7 () {
//     var myString= "sayonara"
//     myString= myString.substr(0,3)
//     return console.log (myString)
// }
// exercise7 ()

// function exercise8 () {
//     var myString= "sayonara" 
//     myString= myString.substr(2,4)
//     return console.log (myString)

// }
// exercise8()

// function exercise9 () {
//     var myString= "sayonara"
//     myString= myString.substr (3)
//     console.log (myString)
// }
// exercise9 ()

// function exercise10 (myString, myIndex) {
//     if (myIndex > myString.length) {
//         return console.log("Index too long");
//     }
//     return console.log(myString.substr(myIndex));

// }
// exercise10 (prompt("string"), +prompt("number"))
