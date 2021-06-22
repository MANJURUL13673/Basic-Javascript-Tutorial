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