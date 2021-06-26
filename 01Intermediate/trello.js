const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0])

days.forEach(function(day, index) 
{
    console.log(`Greeting message for ${index} --- ${day}`) 
})


//for loop
for (let index = 0; index < days.length; index++) 
{
    console.log(days[index])
}