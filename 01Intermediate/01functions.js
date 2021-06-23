let sayHello = function(name) 
{
    console.log("Greeting message for reader.")
    console.log(`Hey ${name}`)
}

sayHello('John')


let fullNameMaker = function(firstName, lastName)
{
    console.log('Welcome to Github')
    console.log(`Happy to have you, ${firstName} ${lastName}`)
}

fullNameMaker('John', 'Doe')


let myAdder = function(num1, num2)  //receive the parameter
{
    let added = num1 + num2
    return added    //return value
}

let result = myAdder(3, 5)  //pass parameter
console.log(result)