// must have topics
//  if -else for-loops functions returns statements callbacks ES6 syntax 
//arrow-functions maps filter sort 
//  try and catch block exception handling
// classes objects




//data-types
//number :-- integer and decimal 
let number = 100;
let numner =100000000000000;

//string :- sequence of characters
//boolean :- true or false other 1 or 0
let value1 = true;
let value2 = false;

//null 
let value3 = null;

//undefined
let value4 = undefined;

//undefined vs null 
//null is an object
//undefined is a primitive data type

//symbol

//object
var object1 = {
    name : "vedansh",
    age : 20,
    city : "delhi"
}

console.log("Name :- ",object1.name);
console.log("Age :-",object1.age);
console.log("City :-",object1.city);

var object2 = {
    name : "aniket",
    age : 22,
    city : "new mumbai"
}


//array of objects

let information = [
    {
        name : "vedansh",
        age : 20,
        city : "delhi"
    },
    {
        name : "jay",
        age : 22,
        city : "new mumbai"

    },
    {
        name : "nancy",
        age : 22,
        city : "new mumbai"

    },
    {
        name : "dhvani",
        age : 22,
        city : "new mumbai"

    },
    {
        name : "lipsa",
        age : 22,
        city : "new mumbai"

    },
    
]

//  indexing works n-1 
// for example 5 elements 0-4



console.log(information)
console.log("first index:-",information[0]);
console.log(information[0].name);
console.log(information[0].age);
console.log(information[0].city);

console.log("last index",information[4])



//arrays :- arrays are the collection of data
let array1 = [1,2,3,4,5];
console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);






let person = "abcd";
//index starts from 0 
console.log(person[0]);
console.log(person);



//string methods
//toUpperCase()
//toLowerCase()
//trim()
//charAt()
//concat()
//includes()
//indexOf()
//lastIndexOf()
//replace()
//slice()
//split()
//substring()
//substr()
//repeat()
//search()
//match()
//startsWith()
//endsWith()
//length
//repeat()
//charCodeAt()
//fromCharCode()
//valueOf()
//toString()
//toLocaleString()
//toFixed()
//toPrecision()
//toExponential()
//toLocaleLowerCase()
//toLocaleUpperCase()
//toString()
//valueOf()
//toLocaleString()
//toFixed()
//toPrecision()
//toExponential()
//toLocaleLowerCase()
//toLocaleUpperCase()
//toString()
//valueOf()
//toLocaleString()



//operators
// + - * / % ++ --






// variables (let,var,const)
let a = 10;


let b = 20;

var c = 30;
var c =20;

const rest = "abc";
// rest = "pqr"; ---> this will throw an error 

//let is blocked scope variable
//var is function scope variable
//const is also variable but value can't be change






console.log(a+b);




// if-else examples


let age = -68;
//dynamic


// true == 1
// false != 0
if(age>=18){
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}




// if-else ladder
if(age>=18 && age<=60){
    console.log("you are eligible to vote");
}
else if(age>60 && age<=70){
    console.log("you are eligible to vote but you have to give your consent");
}
else{
    console.log("you are not eligible to vote");
}


//nested if else
if(age>=18){
    if(age<=60){
        console.log("you are eligible to vote");
    }
    else{
        console.log("you are not eligible to vote");
    }
}
else{
    console.log("you are not eligible to vote");
}



// switch case examples




