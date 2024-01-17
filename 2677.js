/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chArr = []
    let index = 0
    while (index < arr.length){
        chArr.push(arr.slice(index , size+index))
        index += size
    }
    return chArr;
};
