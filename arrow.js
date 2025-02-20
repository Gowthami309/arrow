// //question-1

function demo1(x,y){
    let result=x+y;
    console.log(result);

}

demo1(10,20);

//question-2
var add=(a,b)=>
{
    return a+b
}

//question-3
var square=n=>
    n*n
console.log(square(2))

//question-4
//here in arrow function when we take only one parameter no need of () lets see an example
var str=a=>
{
    console.log("gowthami")
}
str()

//question-5
//implicit return
var cube=n=>
    n*n*n
console.log(cube(3))
//explicit return
var cube=n=>
{
    return n*n*n
}
console.log(cube(3))

//question-6
var subtract=(a,b)=>
    a-b
console.log(subtract(5,3))

//question-7
var demo=()=>
    "Hello,world!"
console.log(demo())

