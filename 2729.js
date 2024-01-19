/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let a = (n * 2).toString()
    let b = (n * 3).toString()
    let c = n.toString()
    let res = a + b + c;
    res = res.split('').sort().join('')
    if(res === '123456789'){
        return true;
    }else{
        return false;
    }

    
};