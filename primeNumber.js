// let num = 7;
// let counter = 0;


// // 2 3 4 5 6 
// for(let i = 2;i<num;i++){
//     if(num%i==0){
//         console.log(num%i);
//         counter++;
//     }
// }

// if(counter==0){
//     console.log("It is a prime number")

// }else{
//     console.log("It is not a prime number")
// }



// 1 to 5 prime numbers  printing 
for(let j = 1;j<=5;j++){
    num =j; // 1 2 3 4 5  
    isPrime = true;

    for(let i = 2 ;i<num ;i++){
            if(num%i==0){
                    isPrime = false;
                    break;
            }   
    }
    if(isPrime){
         console.log("Is a prime",j);
    
    }else{
        console.log("not prime" ,j)
    }

}












