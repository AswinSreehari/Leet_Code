/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let n = num.toString().split('')
     if(n[0] == '0'){
         return true
     }else if(n[n.length-1]=='0'){
         return false
     }else{
         return true
     }

    
};