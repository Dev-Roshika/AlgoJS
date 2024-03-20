// Write a function that checks whethe a given string is a palindrome or not?

function isPalindrome(str){
    let reversed = "";
    reversed = str.split("").reverse().join("   ");
    return reversed === str;
}

console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true