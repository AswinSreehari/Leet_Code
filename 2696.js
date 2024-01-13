/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    for (let i = 0 ; i < s.length ; i ++){
        while(s.includes('AB')||s.includes('CD')){
            if(s.includes('AB')){
                s = s.replace('AB','')
            }
            if(s.includes('CD')){
                s = s.replace('CD','')
            }
        }
    }
    return s.length;
};