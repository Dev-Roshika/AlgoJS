// Write a function that returns the reverse of a string?

/*
var s = "hello"
console.log(s.split('e')) // [ 'h', 'llo' ]
console.log(s.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(s.split('').reverse()) // [ 'o', 'l', 'l', 'e', 'h' ]
console.log(s.split('').reverse().join()) // o,l,l,e,h
console.log(s.split('').reverse().join('')) // olleh
*/
/*
var s1 = "world";
var s2 = "war";
console.log(s1.length); // 5
console.log(s1.concat(s2)); // worldwar
console.log(s1 + s2); // worldwar
console.log(s1[0]); // worldwar
*/

function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // olleh
// We can use built-in methods to do this as well. 
// console.log(s.split('').reverse().join('')) 
