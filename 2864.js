/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let counter = 0;
    
    for (const char of s)
        if (char === '1')
            counter++;
    
    return '1'.repeat(counter - 1) + '0'.repeat(s.length - counter) + '1';
};