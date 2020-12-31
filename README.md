# Merge Sort - Dynamic Illustration using React

https://callstack-mergesort.netlify.app/

```javascript
const mergeSort = (unsortedArray) => {
  const loIndex = 0;
  const hiIndex = unsortedArray.length - 1;
  const sortedArray = divideAndMerge(unsortedArray, loIndex, hiIndex);
  return sortedArray;
}

const divideAndMerge = (unsortedArray, loIndex, hiIndex) => {
  if (loIndex === hiIndex) {
    return [unsortedArray[loIndex]];
  }

  const mid = Math.floor((hiIndex - loIndex) / 2) + loIndex;

  const left = divideAndMerge(unsortedArray, loIndex, mid);
  const right = divideAndMerge(unsortedArray, mid + 1, hiIndex);

  const sortedArray = merge(left, right);
  return sortedArray;
}; 

const merge = (left, right) => {
  const auxLength = left.length + right.length;
  const aux = new Array(auxLength);

  for (let i = 0, j = 0, k = 0; k < auxLength; ) {
    if (i >= left.length) aux[k++] = right[j++]
    else if (j >= right.length) aux[k++] = left[i++]
    else if (left[i] > right[j]) aux[k++] = right[j++]
    else if (left[i] <= right[j]) aux[k++] = left[i++]
  }
  return aux;
};
```
