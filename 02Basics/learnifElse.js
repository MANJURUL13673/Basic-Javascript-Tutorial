if (false) {
    console.log('I am inside if block.')
    console.log('I am still inside if block.')
} else if (true) {
    console.log('I am inside IF IN CAPS BLOCK.')
} else {
    console.log('I am inside the else block.')
}



var whoIsHere = 'teacher'

if(whoIsHere == 'user') {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if(whoIsHere == 'teacher') {
    console.log('Greeting message for TEACHER')
    console.log('Allow access to his courses')
} else {
    console.log('MESSAGE: please verify your email')
    console.log('send user an email for verification')
}