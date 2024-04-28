function countPrimeSetBits(left: number, right: number): number {
    let counter = 0;
    for (let i = left; i <= right; i++ ) {
        let numOfOnes = 0;
        let currentQuotient = i;
        while(currentQuotient > 0) {
            if (currentQuotient % 2 !== 0) {
                numOfOnes++;
            }
            currentQuotient = Math.trunc(currentQuotient/2);
        }
        if (numOfOnes > 1 && (numOfOnes === 2 || numOfOnes == 3 || (numOfOnes % 2 !== 0 && numOfOnes % 3 !== 0)) ) {
          counter++;
        }
    }

    return counter;
};