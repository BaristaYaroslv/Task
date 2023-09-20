function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    i += 1;
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      result += "Buzz";
    }
    return result || i;
  });
}
console.log(fizzbuzz(15));
// [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",];
