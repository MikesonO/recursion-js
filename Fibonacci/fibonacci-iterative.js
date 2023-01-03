// Fibonacci (Iterative)
const fibs = (num, sequence = []) => {
  num === 0 ? sequence : num == 1 ? sequence.push(0) : sequence.push(0,1);
  
  for (let i = 2; i<num; i++){
    const newNum = sequence.at(-2) + sequence.at(-1);
    sequence.push(newNum);
  }
  return sequence;
}

console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]