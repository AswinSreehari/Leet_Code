function arrangeCoins(n: number): number {
    let rows: number = 0;
    let totalCoin: number = 0;
    for(let i = 1; i <= n; i++){
        totalCoin += i;
        if(totalCoin > n) break;
        rows += 1;
    }
    return rows;
};