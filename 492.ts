function constructRectangle(area: number): number[] {
    let maxL = Math.floor(Math.sqrt(area));
    let L = 0;
    let W = 0;
    for (let i = 1; i <= maxL; i++) {
        let x = area % i;
        if (x === 0) {
            L = i;
            W = area / i;
        }
    }

    return [L, W].sort((a, b) => b - a);
};