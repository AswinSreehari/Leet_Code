/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let arr = [];
    for( let elem of s){
        if(elem === 'i'){
            arr.reverse();
        }else{
            arr.push(elem)
        }
    }
    return arr.join("");
    
};