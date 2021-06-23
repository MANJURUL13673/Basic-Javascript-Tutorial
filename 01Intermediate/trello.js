const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0])

days.forEach(function(day, index) {
    console.log(`Greeting message for ${index} --- ${day}`) 
})