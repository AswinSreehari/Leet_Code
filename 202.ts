function isHappy(n: number): boolean {
    let arr: number[] = [];
    while (true) {
        n = String(n).split('').reduce((acc, cur) => acc + Math.pow(Number(cur), 2), 0);
        if (n === 1) {
            return true;
        } else if (arr.includes(n)) {
            return false;
        } else {
            arr.push(n);
        }
    }
}
