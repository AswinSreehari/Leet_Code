function findComplement(num: number): number {
    let res : string[] = []
    let rev = (num >>> 0).toString(2).split('')
    rev.forEach(n => {
        (n == '1') ? res.push('0') : res.push('1')
    })
    return parseInt(res.join(''), 2)
};