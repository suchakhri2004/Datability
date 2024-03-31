function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) {
        return [-1, -1]
    }

    let result = []
    let list = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i)
        } else {
            list = -1
        }
    }

    if (result.length === 1) {
        let answer = []
        answer.push(...result, ...result)
        return answer
    }
    else if (result.length === 0) {
        return [-1, -1]
    }
    else if (result.length > 2) {
        const first = result[0]
        const end = result.length - 1
        console.log(end);
        let Arr = []
        Arr.push(first, result[end])
        return Arr

    }
    else {
        return result
    }

};
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3));
