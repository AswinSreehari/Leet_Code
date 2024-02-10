/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    //Solution #1

    //return args.length;

    //Solution #2
    
    let count = 0;
    for(let i = 0 ; i < args.length ; i ++){
        count ++;
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */