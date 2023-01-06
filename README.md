<div align=center>
  <h1 style='display: inline;' >Project: Recursion</h1>
</div>

Solutions for two common data structures and algorithm problems ([Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) and [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)) using recursion.

#### Fibonacci 
Both functions accepts a number and returns an array containing that many numbers from the fibonacci sequence. For example, and input of 8, this method wiil return the array [0, 1, 1, 2, 3, 5, 8, 13]
##### Iterative
``` javascript
const fibs = (num, sequence = []) => {
  num === 0 ? sequence : num == 1 ? sequence.push(0) : sequence.push(0,1);
  
  for (let i = 2; i<num; i++){
    const newNum = sequence.at(-2) + sequence.at(-1);
    sequence.push(newNum);
  }
  return sequence;
}
```

##### Recursive
``` javascript
const fibsRec = (num, sequence = [0, 1]) => {
  if (num === 0){
    sequence = [];
  } else if (num === 1){
    sequence = [0];
  }
  if (sequence.length >= num) return sequence;
  return fibsRec(num, [...sequence, sequence.at(-2) + sequence.at(-1)]);
};
```
- - -

#### Merge Sort
This function accepts an array and uses recursion to return a sorted array.

``` javascript
const mergeSort = (arr) => {

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, middle);
	const rightHalf = arr.slice(middle, arr.length);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}


const merge = (leftArr, rightArr) => {

  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}
```
