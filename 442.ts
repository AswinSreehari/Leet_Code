function findDuplicates(nums: number[]): number[] {
    const set = new Set();
    const arr: number[] = [];
     nums.forEach(num =>{
        if(!set.has(num)){
            set.add(num);
        }else{
            arr.push(num);
        }
     })
    
    return arr;
};