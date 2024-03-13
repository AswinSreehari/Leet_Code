function pivotInteger(n: number): number {
    let sum = (n * ( n + 1) / 2);
    for(let i = 1 ; i <= n ; i ++){
        if(sum === i ** 2) return i;
    }
    return -1
};