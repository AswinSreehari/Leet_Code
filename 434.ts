function countSegments(s: string): number {
    const arr: string[] = s.split(" ");
    let count: number = 0;
    for(let elem of arr){
        if(elem) count ++;
    }
    return count;
};