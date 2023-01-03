// Merge Sort (Recursive)

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


console.log(mergeSort([10,5,2,7,9,1,3,6,8,4])); // [1,2,3,4,5,6,7,8,9,10]
console.log(mergeSort([])); // []