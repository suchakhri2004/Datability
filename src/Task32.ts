function longestValidParentheses(s: string): number {

    let ArrNum = Array.from(s)
    let answer = 0
    let answerSAVE = 0
    let answerThree = 0

    let Arr = []

    let ArrNumV2 = []

    


    for (let i = 0; i < ArrNum.length; i++) {
        const current = ArrNum[i]
        const Next = ArrNum[i + 1]
        if (current === '(' && Next === ')') {
            ArrNum.splice(i, 2)
            answer++
            if (ArrNum[i] === '(' && ArrNum[i + 1] === '(' || ArrNum[i] === ')' && ArrNum[i + 1] === ')') {
                answerSAVE = answer
                answer = 0
                Arr.push(ArrNum[i])
                ArrNum.splice(i,1)                
                break
            }
        }
    }

    for (let i = ArrNum.length - 1 ; i >= 0 ; i--) {
        if (ArrNum[i] === '(' && ArrNum[i + 1] === ')') {
            ArrNum.splice(i, 2)
            answer++
        }
    }

    let answerReal = 0
    
    console.log("Arr ===>",Arr);
    console.log("ArrNum ===>",ArrNum);
    
    if(Arr[0] === '(' && ArrNum[0] === ')'){
        answerThree ++
        answerReal = answer + answerSAVE + answerThree
    }
    else if(Arr[0]===')'){
        answerReal = answer + answerSAVE
    }
    else{
        answerReal = answer
    }

    console.log("answer",answer)
    console.log("answerSave",answerSAVE)
    console.log("answerThree",answerThree)
    
    

    let result = answerReal * 2

    return result
};
console.log("Result ===>", longestValidParentheses(")()())()()("));
