function divide(dividend: number, divisor: number): number {
    
    let answer =  0

    if(Math.pow(-2,31) <= dividend && divisor <= Math.pow(2,31) - 1 && divisor != 0){
    
    let ans = dividend / divisor
   
    
    if( ans < 0 ){
        answer += Math.ceil(ans)
    }
    else if(ans > 0){
        answer += Math.floor(ans)
    }
    if (ans > Math.pow(2,31) - 1 || ans < Math.pow(-2,31)){
        answer = Math.pow(2,31) -1
    }
}

    return answer
    
};
console.log(divide(-2147483648,-1));
