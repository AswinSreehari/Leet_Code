/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {

    let data  = new Set(s)
    return data.size;
   
};