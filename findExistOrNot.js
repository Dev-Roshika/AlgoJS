var a = ['boy', 'oy']
var b = ['Man', 'an']
var c = ['Van', 'Ca']

function findExistOrNot(arr){
    var firstWord = arr[0];
    var secondWord = arr[1];
    var result = firstWord.includes(secondWord);
    console.log(firstWord);
    console.log(result);
}


findExistOrNot(a) // true
findExistOrNot(b) // true
findExistOrNot(c) // false
