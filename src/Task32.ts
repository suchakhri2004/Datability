function longestValidParentheses(s: string): number {
    let result = 0
    let indexArr : number[] = [-1]
    for(let i = 0 ; i < s.length ; i++ ){
        if(s[i] === '('){
            indexArr.push(i)
            //ถ้าเจอ ( ให้ push indexของ ( เลย ละจบ หาตัวต่อไป
        }
        else{
            indexArr.pop()
            //ถ้าเจอ ) ให้ pop ออกละเช็คเงื่อนไขล่าง
            if(indexArr.length === 0){
                indexArr.push(i)
                //ถ้าตัวใน indexArr.length === 0 ให้ push index ของ ) เข้าไป ละจบวนกลับขึ้นบน
                //ถ้ามีก็เช็คเงื่อนไขต่อไป
            }
            else{
                result = Math.max(result, i - indexArr[indexArr.length - 1 ])
                //ถ้าตัวใน indexArr.length !== 0 ให้ result = ค่าที่มากที่สุดที่เลือกมาจาก Math.max
                // โดยเลือกจาก result คือตัวมันที่เก็บมาตลอด หรือ ค่า index ล่าสุด - ตัวท้ายสุดของ indexArr
                //ค่าไหนมากสุดก็เอาค่านั้นมาเก็บ ละวนกลับขึ้นไปด้านบน loop เช็คครบทุกตัว
            }
        }
    }

    return result
};
console.log(longestValidParentheses('()))(()'));

//ไม่ใช่แค่การเช็ค วงเล็บ แต่คือการเอา วงเล็บ มาคัดแยก หาตัวที่ วงเล็บ ติดกัน โดยไม่ถูกขัด จาก วงเล็บ ที่ไม่สมบูรณ์
