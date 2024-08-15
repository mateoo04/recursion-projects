function merge(left, right) {
  let merged = [];
  if (left === undefined || left.length === 0) return right;
  else if (right === undefined || right.length === 0) return left;

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  else if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
  }
}

const testArray = [13, 0, 177, 5, 111, 2, 4, 7, 77, 44, 5, 5];

console.log(mergeSort(testArray));
