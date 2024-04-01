function candy(ratings: number[]): number {
    let count = ratings.length
    let candy = new Array(count).fill(1)
    
    for(let i = 0 ; i < ratings.length ; i++){
        if(ratings[i] > ratings[i+1]){
            if(candy[i] < 2){
            candy[i] ++
            }
        }else if (ratings[i+1] > ratings[i]){
            if(candy[i+1] < 2){
            candy[i+1]++
            }
        }
    }

    for (let i = ratings.length; i >= 0; i--) {
        if(ratings[i] > ratings[i+1] && candy[i] <= candy[i+1]){
            candy[i] = candy[i+1] +1
        }if (ratings[i+1] > ratings[i] && candy[i+1] <= candy[i]){
            candy[i+1] = candy[i] +1
        }
    }

    for (let i = 0; i < ratings.length; i++) {
        if(ratings[i] > ratings[i+1] && candy[i] <= candy[i+1]){
            candy[i] = candy[i+1] +1
        }if (ratings[i+1] > ratings[i] && candy[i+1] <= candy[i]){
            candy[i+1] = candy[i] +1
        }
    }

    const result = candy.reduce((a,b)=> a+b,0)
    
    
    return result
};
console.log('count ===>', candy([1,3,4,5,2]));


// 1 2 3 1 3 2 1
//ลูกอมต้องมากกว่าคนข้างๆที่ ratings น้อยกว่าเสมอ ลูกอมเท่ากับ คนข้างๆ +1