function threeSum(nums: number[]): number[][] {
    // nums.sort((a, b) => a - b)

    let answer = []

    let result = [[]]

    for(let i = 0 ; i < nums.length ; i++){
        const current = nums[i]
        const Next1 = nums[i+1]
        const Next2 = nums[i+2]

        if(current + Next1 + Next2 === 0){
            answer.push(current,Next1,Next2)
        }
        
    }

    console.log(answer);
    

    return result

};
console.log(threeSum([-1,0,1,2,-1,-4]))