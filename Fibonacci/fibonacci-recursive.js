// Fibonacci Recursive
const fibsRec = (num, sequence = [0, 1]) => {
  if (num === 0){
    sequence = [];
  } else if (num === 1){
    sequence = [0];
  }
  if (sequence.length >= num) return sequence;
  return fibsRec(num, [...sequence, sequence.at(-2) + sequence.at(-1)]);
};

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]