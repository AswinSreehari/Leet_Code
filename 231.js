//JavaScript

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return 0;
    return ((n & (n - 1)) === 0);
    
};

//TypeScript

function isPowerOfTwo(n: number): boolean {
    if(n <= 0) {
    return false;    
    }
    return ((n & (n - 1)) === 0);
    
};