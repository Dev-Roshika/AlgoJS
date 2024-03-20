// Write a function that returns the longest word in a sentence.

function longestWord(str){
    let words = str.split(' ');
    let longestWord = '';
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("I woke up early today")); // early