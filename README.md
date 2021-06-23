# Basic-Javascript-Tutorial
## Introduction
This repository will discuss the basic Javascript operation from Scratch to Advance
## Tools that we need
- Node JS
- Code Editor - Sublime Text, Atom, VSCode etc.
- Browser - Chrome
## Environment Setup
- Download and install node js - https://nodejs.org/en/<br>
    Open your command line and write -
    ```
    node -v
    ```
    If node js successfully installed, you will get the node js version number.
- Code Editor - It is totally your choice. Nothing is bad. But I am now currently use VSCode.
- Browser - Chrome is preferable.
## Start with the first code
Create a file name HelloWorld.js. You can give any name with extension .js.
Write some code in the file.
```
console.log("Hello World!!!")
```
Open your command line. Go to the directory where the file exist. Run the file by writting the command - 
```
node HelloWorld.js
```
In the command line after write `node`, give a space and write your file name whatever it is. Press Enter. 
<br>You will see the output `Hello World!!!`

<br><b>File: HelloWorld.js</b>
## Introduction to variable
We can declare variable by calling `let` or `const` in JS. Both can store and understand any type of data like int, float, string etc.
- let - this type of variable can vary. We can reinitialize it.
- const - this type of variable is constant. It can not reinitialize.
<p>For declarying string <code>''</code> and <code>""</code> both are acceptable.
No need to worry about <code>;</code> in the last of line. JS gives flexibility to use this.<br>

<b>File: variables.js</b></p>

## Introduction to number
Mathermatical calculations like addition, subtraction, multiplication and division can be done in JS.<br>
% sign calculate the modulus of a number.<br>

<b>Special Tricks:</b>
- Bracket a segment by selecting the segment and press Shift + 9.
- For commenting several lines, select these lines and press Ctrl + /.<br>

<b>File: celsius.js</b>
## Undefined, Null and Boolean
<b>Undefined and Null are two different concept.</b> Undefined means the variable is not defined or it has unknown value. And null means the value has no value.<br>
Boolean is a type of only true or false. Comparison between two variables gives the Boolean type data.

<b>File: nullandBool.js</b>
## IF ELSE 
This is for condition checking.
- If Block - initial block for condition checking. 
- Else If Block - If 'If block' is not true then check this block condition. Multiple Else If block is possible.
- Else Block - If bought 'If and Else block' is not true then go for this block.

<b>File: learnifElse.js</b>
## Logical Operation
There are 3 logical operation in JS.
- && - AND operator - Both sides need to be true
- || - Or operation - One side need to be true
- ! - Not operatior - Reverse the logical operation true to false and false to true

<b>File: logicalOps.js</b>
## let vs var
- let - let maintain block scope. It works as local block of code `{}` or global in a function totally depends on you.
- var - var maintain functional scope. wheather we declares it, it always works as global variable for a function.<br>

<i>Caution: We should try to do not use var unless the variable is completely global in a function.</i><br>

If we try to access local variable from outside of it's decleration scope then it gives an error.

<b>File: scope.js</b>
## Scope
- If we redeclare a let then it will not change in the outer block.
```
let King = 'John'
if(true)
{
    let King = 'Sam';
    //This part King is Sam
}
//This part King is John
```
- If we do not redeclare a let then the value will change in outer block also.<br>
```
let King = 'John'
if(true)
{
    King = 'Sam'
    //This part King is Sam
}
//Also in this part the King is Sam. As we do not redeclare the let.
```
- If we forget to declaration a variable, it always declare as var.<br>
```
if(true)
{
    King = 'Sam'
    //This part can access to King
}
//Also this outer part can access to King
```

<b>File: Scope.js</b>
## Array
Array is a technique to store one or multiple values in a single variable.
- `[]` third bracket use to initialize the array. Multiple values are separated by `,` inside the `[]`
- Array indexing always start from 0.
- The value inside the array can be accessible by calling it's index.<br>
```
arrayName[index]
```
- We can get the size of the array by simply call `arrayName.length`<br>

<i>Tricks: We can do any operation inside the `${}` in `console.log()`</i>

<b>File: marvels.js</b>
## CRUD in Array
Update:
- Simply give a new value in the index which we need to update. 
```
arrayName[updateIndexNo] = updated_value
```

Insert and Delete:
- Shift(): Delete the first element of array. This method return the value which has deleted from first.
- Unshift(newValue): Insert newValue in the first of the array.
- Pop(): Delete the last element of array. This method return the value which has delete from last.
- Push(newValue): Insert newValue in the last of the array.
- splice(index_position, delete_count, newValue): It deleted delete_count value from the index_position and insert a newValue in the index_position.

<b>File: marvels.js</b>
## Function
Function is a block of code to do a specific task. It can do both taking parameter and return value after processing.

Decleration:
```
let functionName = function(param1, param2) {

}
```
Processing:
For working the function from any place of the code simply call by `functionName()`. 
If any parameter need to pass then `()` inside the bracket the parameter should be pass and catch by variables in function.
If it is need to return a value, then simply return the value from inside the function.

<b>File: 01functions.js</b>


