// examples of how loop works

for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 10; i > 0; i--){
    console.log(i);
}

//nested loops
for(let i = 0 ; i<5;i++){
    for(let j = 0;j<5;j++){
        console.log(i);
    }
}


//while loops
let k = 0; // initailizer 
while(k<5){
    console.log(k);
    k++;
}


// k = 0 
// 0<5  0
// 1<5  1
// 2< 5 2
// 3<5  3
// 4<5 4
// 5 < 5 



// i = 0 ---> 0 1 2 3 4   

//do while loops
let l = 0;
do{
    console.log(l);
    l++;
}while(l<5);


//key : value
//for in loop
let object1 = {
    name : "vedansh",
    age : 20,
    city : "delhi"
}

// 0 1 2
//for in loop
for(let key in object1){
    console.log(key);
}


//[]--> array 
//for of loop
let object2 = [
    {
        name : "vedansh",
        age : 20,
        city : "delhi"
    },
    {
        name : "aniket",
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
    {
        name : "lipsa",
        age : 22,
        city : "new mumbai"
    }
]

console.log(object2[4]);



for(let key of object2){
    console.log(key);
}

//for of loop for array of objects
for(let key of object2){
    console.log(key.name);
}

//for of loop for array of objects
for(let key of object2){
    console.log(key.age);
}

//for of loop for array of objects
for(let key of object2){
    console.log(key.city);
}

//for of loop for array of objects
for(let key of object2){
    console.log(key.name + " is " + key.age + " years old and lives in " + key.city);
}

//for of loop for array of objects
for(let key of object2){
    console.log(key.name + " is " + key.age + " years old and lives in " + key.city + " and is a " + key.age + " years old");
}







