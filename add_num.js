function add(a, b, c, d) {
  console.log(a, b, c, d); // 1 2 3 4
  console.log(a + b + c + d); // 10
}

add(1, 2, 3, 4); // 10

// What happens if we pass more than 4 arguments to the function? Let's see.

function add_dynamic(...nums) { // ...nums is a rest parameter that collects all the remaining arguments into an array called nums. | Spread syntax (...)
  console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  const res = nums.reduce((acc, curr) => acc + curr, 0);
  console.log(res); // 55
}

add_dynamic(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

function add_ab(a, b){
  console.log(a + b);
}

add_ab(1, 2); // 3
add_ab(1); // NaN
add_ab(1.23, 2.12); // 3.35
add_ab("hello", "world"); // helloworld
// The data types are determined by the values of the arguments that are being passed to the function.
// The function add_ab is not type safe. It can accept any type of arguments and perform the operation. 
// This is not a good practice. We should always make sure that the function is type safe.