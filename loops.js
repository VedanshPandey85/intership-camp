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
let k = 0;
while(k<5){
    console.log(k);
    k++;
}

//do while loops
let l = 0;
do{
    console.log(l);
    l++;
}while(l<5);

//for in loop
let object1 = {
    name : "vedansh",
    age : 20,
    city : "delhi"
}

for(let key in object1){
    console.log(key);
}

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
    }
]

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







