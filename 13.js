/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let val = 0;
    for(i = 0 ; i < s.length ; i ++){
        if(romans[s[i]] < romans[s[i + 1]]){
            val -= romans[s[i]];
        }else{
            val += romans[s[i]];
        }
    }    
    return val;
};