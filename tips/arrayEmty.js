const arr1 = [];
const arr2 = [1,2,3,4,5,6,7,8,9,10];

const isarr1Empty = !(Array.isArray(arr1) && arr1.length > 0);
const isarr2Empty = !(Array.isArray(arr2) && arr2.length > 0);
console.log(isarr1Empty);
console.log(isarr2Empty);