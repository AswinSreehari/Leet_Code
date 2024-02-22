/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let ans = []
    let res = grid.flat()
    for (let i = 0; i < res.length; i++) {
        for (let j = i+1; j < res.length; j++) {
            if (res[i] === res[j]) {
                ans.push(res[i])
            }
        }
    }
    for(let k=1;k<=res.length;k++){
         if (!res.includes(k)) {
                ans.push(k)
            }
    }
    return ans
};