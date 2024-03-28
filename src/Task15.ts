function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)

    let answer = []

    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (3 <= nums.length && nums.length <= 3000 && nums[i] >= -100000 && nums[i] <= 100000) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        answer.push([nums[i], nums[j], nums[k]])
                    }
                }
            }

            const data = new Set(answer.map(an => JSON.stringify(an)))
            result = Array.from(data).map(str => JSON.parse(str))

        } else {
            break
        }
    }

    return result

};
console.log(threeSum([1,2,3]))
