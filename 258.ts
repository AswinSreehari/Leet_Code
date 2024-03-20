function addDigits(num: number): number {
    if(num <= 9)return num;
    const n = num.toString().split('');
    return addDigits(n.reduce((acc , nums) => acc += Number(nums),0))

};