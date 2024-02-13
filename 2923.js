/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let arr = [];
    let count;
    for(let i = 0 ; i < grid.length ; i ++){
        count = 0;
        for(let j = 0 ; j < grid[i].length ; j ++){
            count += grid[i][j];
        }
        arr.push(count);
    }
    let largest = 0;

    for(let k = 1 ; k < arr.length ; k ++) {
        if(arr[k] > arr[largest]){
            largest = k;
        }
    }
    let result = arr.indexOf(arr[largest]);
    return result;
    
};