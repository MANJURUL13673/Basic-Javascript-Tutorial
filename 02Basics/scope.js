let iAmGlobal = 'someValue'

if(true) 
{
    var iAmLocal = 'someMoreValue'
    console.log(iAmGlobal);
    console.log(iAmLocal);
    iAmGlobal = 'Superman'
}

console.log(iAmLocal)   //if declare in let it gives an error, but declare in var it is ok.
console.log(iAmGlobal);



//Kings Problem

let King = 'John'

if(true) 
{
    let King = 'Sam'
    if(true)
    {
        let King = 'Jam'
        King2 = 'Jam2'
        console.log(King)
    }
}

if(true)
{
    console.log('I am second part ' + King)
    console.log('I am second part king ' + King2)
}