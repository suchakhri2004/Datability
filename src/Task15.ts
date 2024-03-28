function threeSum(nums: number[]): number[][] {

    let result = [[]]

    

    for(let i = 0 ; i < nums.length ; i++){
        if(Math.pow(10,5) <= nums[i] || Math.pow(-10,5) <= nums[i] ){
            let answer = []


    nums.sort((a, b) => a - b)


    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
           for(let k = j+1 ; k < nums.length ; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    answer.push([nums[i],nums[j],nums[k]])
                }
           }
            
        }
    }



    const b = new Set(answer.map(an => JSON.stringify(an)))

     result = Array.from(b).map(str => JSON.parse(str))
    
    
        }
        else if(3 <= nums.length || nums.length <= 3000){
            let answer = []


    nums.sort((a, b) => a - b)


    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j < nums.length ; j++){
           for(let k = j+1 ; k < nums.length ; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    answer.push([nums[i],nums[j],nums[k]])
                }
           }
            
        }
    }



    const b = new Set(answer.map(an => JSON.stringify(an)))

     result = Array.from(b).map(str => JSON.parse(str))
    
    
        }
    }
    
    return result

};
console.log(threeSum([0,0,0]))