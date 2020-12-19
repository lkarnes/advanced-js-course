//types in js
/*
6 types 5 pirmitive 1 nonprimitive

-prim 
Boolean
Number
String
Null
Indefined

-non prim
Object

check type with typeof()
null will return object

java vs js or staticaly typed vs dynamically typed

statically typed languages stop you from changing the type of variable
java you must define the type when creating the variable but js you can change the type as you wish
if a var isnt initailized it defaults to undefined
null is used so the developer can set a value to nothing where undefined will be made from the language
undefined and null are considered values
undefined == null returns true
 

== vs ===
== is equality and === is strict equality
=== checks for type and value equality
== checks for only value equality
with == js tries to intellgently figure out if they are equal
this causes problems when trying to compare booleans to strings because it will try to convert the string to boolean and return false even if string is "true"
*/
//ex
'' == '0'; //false
0 == ''; //true
0 == '0' //true

0 === ''; //false
0 === '0';//false
/*
 */
