/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arrr = [];
    for(let i = 0 ; i < arr.length ; i ++){
        if(fn(arr[i] , i)){
            arrr.push(arr[i]);
        }
    }
    return arrr;
    
};