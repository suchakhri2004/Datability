function rotate(nums: number[], k: number): void {
    let count = 0
    let end = nums.length - 1
    
        while(count < k){
            nums.unshift(nums[end])
            nums.pop()
            count++
        }
 
};
console.log(rotate([1,2,3,4,5,6,7],3));
