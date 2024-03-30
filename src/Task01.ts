function twoSum(nums: number[], target: number): number[] {
    let answer:number[] = []
    
    for (let i = 0; i < nums.length; i++) {
        for (let k = i+1; k < nums.length; k++) {
            if(nums[i] + nums[k] === target){
                answer.push(i,k)
                break
            }
            
        }
        
    }

    return answer
}
console.log(twoSum([1,2,3],3));
