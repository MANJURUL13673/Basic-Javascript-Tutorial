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
- let - let is depend on scope or block of code. it works as local or global totally depends on you.
- var - var does not maintain any scope. wheather we declares it, it always works as global variable.<br>

<i>Caution: We should try to do not use var unless the variable is completely global.</i><br>
If we try to access local variable from outside of it's decleration scope then it gives an error.

<b>File: scope.js</b>