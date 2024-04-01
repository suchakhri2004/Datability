function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('')
    const sortedT = t.split('').sort().join('')

    console.log(sortedS)
    console.log(sortedT)
    
    
    return sortedS === sortedT
}

console.log(isAnagram("dbca", "abcd"))