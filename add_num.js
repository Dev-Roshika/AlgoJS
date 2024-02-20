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