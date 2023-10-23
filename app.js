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

 

