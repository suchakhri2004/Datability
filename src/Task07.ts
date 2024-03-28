function reverse(x: number): number {

    if(x === 0){
        return 0
    }
    
    let NumToString = x.toString().split('')

    const Last = NumToString.length - 1

    let Arr = []

    if(NumToString[0] === '-'){
        Arr.push(NumToString[0])
        NumToString.splice(0,1)
        NumToString.reverse()
        Arr.push(...NumToString)
        NumToString = []
    }
    if(NumToString[Last] === '0'){
        NumToString.splice(Last,1)
        NumToString.reverse()
        Arr.push(...NumToString)
        NumToString = []
    }
    if(NumToString[Last] !== '0' && NumToString[0] === '-'){
        NumToString.reverse()
        Arr.push(...NumToString)
        NumToString = []
    }
    else{
        NumToString.reverse()
        Arr.push(...NumToString)
        NumToString = []
    }   

    const result = parseInt(Arr.join(''))

    if(result > Math.pow(2,31) -1 || result < Math.pow(-2,31)){
        return 0
    }else{
        return result
    }
    
    
};

console.log(reverse(1563847412));
 