function search(nums: number[], target: number): number {
    let result = 0
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
            result = i
            break
        }else{
            result = -1
        }
        
    }

    return result
};
console.log(search([4,5,6,7,0,1,2],8));
