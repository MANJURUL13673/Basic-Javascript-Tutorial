//datatype - Array

const superHeroes = ['Iron Man', 'Spiderman', 'Capt. America']

console.log(superHeroes)
console.log(superHeroes[0])
console.log(superHeroes[2])
console.log(superHeroes[superHeroes.length - 1])

console.log(`We have ${superHeroes.length} super heroes`)

//CRUD in Array

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

numbers[1] = 'SOMETHING'    //Update
console.log(numbers)

//start
console.log(numbers.shift())    //Delete in first
console.log(numbers)

numbers.unshift('INSERT SOMETHING START')   //Insert in first
console.log(numbers)

//end
console.log(numbers.pop()) //Delete in last
console.log(numbers)

numbers.push('Seven')   //Insert in last
console.log(numbers)

//middle
numbers.splice(2, 2, 'DELETE AND ADD')  //Delete and Insert in Middle
console.log(numbers)