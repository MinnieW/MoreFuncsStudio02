function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...
let sortArray = function(arr) {
  let out = []
  let indexOfSmall = arr.indexOf(findMinValue(arr))
  while (arr.length > 0) {
    indexOfSmall = arr.indexOf(findMinValue(arr))
    out.push(findMinValue(arr));
    arr.splice(indexOfSmall,1);
  }
return out;  
};


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//console.log(sortArray(nums1));
console.log(recursionSort(nums1));




//console.log(nums2.indexOf(findMinValue(nums2)))
//console.log(findMinValue(nums1))

// let testArray = []
// testArray.push(findMinValue(nums3))
// console.log(testArray)
//console.log(nums3.splice(findMinValue(nums3),1))