/*
To check if a given number is prime, loop from 2 to the square root of the number. 
If any integer evenly divides it, the number is not prime. 
*/

function isPrime(num) { 

    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  }
  
  console.log(isPrime(1));
  