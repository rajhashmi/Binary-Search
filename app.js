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

let array = [1,2,3,4,5,6,7,8,9]
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