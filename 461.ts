function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).split('').reduce((acc, cur) => acc + Number(cur), 0)
};