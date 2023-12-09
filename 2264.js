/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let c=""
  for(let i = 0 ; i < num.length ; i ++)
  {
      let a = num[i] + num[i] + num[i];
      if(num.includes(a)&&a>c){
          c = a
      }
  }
  return c
   
};