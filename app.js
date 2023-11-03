var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] == target){
            return mid
        }else if(target > nums[mid]){
            low = mid+1
        }else{
            high = mid-1
        }
         
    }
        return -1
};
console.log(search([-1,0,3,5,9,12],9))

// ============== Lower Bound ============================

{let array = [1,2,3,4,5,6,7,8,9]
let n = array.length;

function LowerBound(arr, target, n){
    let lower = arr[0];
    let higher = arr[arr.length - 1];
    let ans = n;
    
    while(lower <= higher){
        let middle = Math.floor((lower + higher) / 2)
        if(arr[middle] >=target){
            ans = middle;
            higher = middle -1
        }else{
            low = middle+1
        }
    }
    return ans
}
console.log(LowerBound(array,1,n))
}

// ======================================= Upper Bound =========================================


function higherBound(arr, target, n){
    let lower = arr[0];
    let higher = arr[arr.length - 1];
    let ans = n;
    
    while(lower <= higher){
        let middle = Math.floor((lower + higher) / 2)
        if(arr[middle] > target){
            ans = middle;
            higher = middle -1
        }else{
            low = middle+1
        }
    }
    return ans
}
console.log(higherBound(array,1,n))


// ========================================== Insert ====================


var searchInsert = function(nums, target) {
    let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
 
  return left;
    
};

// ================================== first and last occurance ========================

function findFirstAndLastOccurrence(n, key, v) {
  let firstOccurrence = -1;
  let lastOccurrence = -1;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (v[mid] === key) {
      firstOccurrence = mid;
      end = mid - 1;
    } else if (key < v[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = n - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (v[mid] === key) {
      lastOccurrence = mid;
      start = mid + 1;
    } else if (key < v[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [firstOccurrence, lastOccurrence];
}

let n = 7;
let key = 13;
let v = [3, 4, 13, 13, 13, 20, 40];

let [first, last] = findFirstAndLastOccurrence(n, key, v);

console.log("First Occurrence:", first);
console.log("Last Occurrence:", last);

var searchMatrix = function(matrix, target) {
  let newArr = matrix.flat(Infinity);
  console.log(newArr)
  for(let i = 0; i < newArr.length;i++){
      if(newArr[i] == target ){
          return true
      }
  }
  return false
};

function simpleSearch(arr,target){
  for(let i = 0; i< arr.length; i++){
    if(arr[i] === target){
      return i
    }
  }
}

// 

function occurance(arr){
  let hashMap = {};
  for(const element in arr){
    if(hashMap[element]){
      hashMap[element]++;
    }else{
      hashMap[element] = 0
    }
  }
  return hashMap
}
