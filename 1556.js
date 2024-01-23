/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = "" + n;
   let ans = "";
   const ln = n.length;
   for (let i = 0; i < ln; i++) {
       if ((ln - i) % 3 == 0 && i) ans += ".";
       ans += n[i];
   }
   return ans;
};