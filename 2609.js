/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {

    let temp = "01"
    while(s.includes(temp)){
       temp =  "0" + temp + "1"
    }
    return temp.length-2
    
};