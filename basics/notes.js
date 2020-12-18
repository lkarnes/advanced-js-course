//JS is 100% backwards compatable so that code on wensites will work forever
//this is convienient but causes some weird stuff when it comes to adding new features

//compiler vs polyfills
/* 
-compilers allow you to write in modern JS but when its compiled it turns it into a lower version for browsers
-polyfills when imported give you the new code but in old syntax
-they both essentially does the same thing in different ways

*/

//use strict

/*
how to enable:
"use strict";
at the top of the file
-its used for debugging
-pulls up silent errors you wouldnt regulary see
second method:
function() {
    "use strict"
}
-only uses it in the function
-use strict doesnt allow you to delete functions or variables
-also doesnt allow you to delete arguments to functions
-disables you from using the word eval as a var
-use var doesnt allow you to redefine variables that have already been declared with a var
ex
"use strict";
var foo = 1;
foo = 2;

foo is still 1

eval
-allows you to translate js expressions from strings
ex:
eval("console.log("hello");")
returns hello
-you can also create  variables in evals
- use strict makes eval variables only acessible within the eval
*/ 

//reference or by val
//by value
// ex
var a = 1;
 function foo(a) {
     a = 2;
 }
 foo(a);
 console.log(a);
 //will return 1 because primitive types are passed into functions by value
 //when a var is passed by value it is passing a copy of the var instead of the actual var
 
 //pass by reference
 //ex
 var a = {};
 function moo(a) {
     a.bar = false;
 }
 moo(a);
 console.log(a)
 //returns {moo: false} because it is being passed by reference
 //objects when passed in to functions can be altered by referencing a key but when trying to change the object itself it is passed my value thus making changes happen only in the function
 //ex:
 var a = {moo: "too"};
 function moo(a) {
     a = {too: "moo"};
 }
 moo(a);
 console.log(a)
 // this returns {moo: "too"} because you are changing the object itself



 //rest operator
 //examples

 //without and limited
 function sum(a,b) {
     return a + b;
 }
 sum(1,2);

 //without with arguments call(used before rest call)

 function sum(){
     var total = 0;
     for(var i = 0; i < arguments.length; i++){
         total += arguments[i];
     }
     return total
 }
 //the arguments array isnt actually an array
 //you cant use array functions on arguments
 //the workaraound-
 function login(method) {
     var options = Array.prototype.slice.call(arguments, 1);
 }

 //with rest operator

 function sum(...numbers){
    var total = 0;
    //you can push on it because its a REAL array
    numbers.push('hello')
    numbers.map(num => {
        total += num
    })
 }
 /* 
 -collapses all the arguments into a single array
 -allows you to deal with a changing amount of args
 */

 //spread operator

 //its the same as the rest operator but acts different depending on the context
 //ex

 var arr1 = [1,2,3];
 var arr2 = [4,5,6,...arr1];
// returns [4,5,6,1,2,3];
var meth = "twitter";
var opts = ["key","callback"];

function login(method, ...options){
   console.log(method);
   console.log(options); 
}
//this wiill make it double nested arr
login(meth, opts);

//this will unpack the array so it doesnt get double nestes
login(meth, ...opts);
/* 
can be used to copy arrays
var arr = [1,2,3]
var copy = [...arr]
copy doesnt alter arr

*/


//template strings
//ex
//multi line strings

//before ES6 you had to do \n for a new line
// var msg = "hello world\ni am logan";
// now you can use backticks
var name = "logan";
var msg = `hello 
this is a multiline 
string and it is embedded
in the actual string i am ${name}`
//you can put expressions nested into strings
//allows you to use template tags like with styled components in react
//tags are very good for formatting
//template tag example-

//this will cut out any of the nested variables in the string and you wont be able to access it
function h1(strings){
    return "<h1>" + strings[0] + "</h1>"
}
h1`hello`

//proper solution for nested variables in template strings
funtion h2(strings, ...values){
    var body = "";
    for(var i = 0; i < strings.length; i++){
        body += strings[i] + (values[i] || "");
    }
    return `<h2>${body}</h2>`
}

//this creates a h1 element with hello inside
/* 
what are template string tags?
-
*/
