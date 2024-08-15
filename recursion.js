//Fibonacci recursion
function fibs(n) {
  let array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array;
}

function fibsRec(n) {
  if (n <= 1) return [0, 1];
  else {
    let array = fibsRec(n - 1);
    array.push(array.at(-1) + array.at(-2));
    return array;
  }
}

console.log(fibs(8), fibsRec(8));
