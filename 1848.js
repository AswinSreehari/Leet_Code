/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let dif;

  nums
    .map((num) => (num == target ? num : null))
    .forEach((el, i) => {
      if (el !== null) {
        const currDif = Math.abs(i - start);

        if (dif == undefined) {
          dif = currDif;
        } else if (currDif < dif) {
          dif = currDif;
        }
      }
    });

  return dif;  

    
};