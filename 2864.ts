function maximumOddBinaryNumber(s: string): string {
    let one: string = '';
    let zero: string = '';
    for (let char of s) {
        if (char === "0") {
            zero += char
        } else {
            one += char
        }
    }
    return one.slice(0, one.length - 1) + zero + one.slice(one.length - 1)
};