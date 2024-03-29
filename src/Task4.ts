function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let result = 0
    
    let sumArr  = []

    sumArr.push(...nums1,...nums2)

    let sortNum = sumArr.sort((a,b)=>a-b)

    const checklen = sortNum.length

    if(checklen % 2 === 1){
        result += (sortNum[checklen/2 - 0.5]);
    }
    else if(checklen % 2 === 0){
        let list = (sortNum[checklen/2-1] + sortNum[checklen/2])
        let divide = list / 2
        result += divide
    }
    return result
};
console.log(findMedianSortedArrays([],[1]));
 