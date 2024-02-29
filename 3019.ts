function countKeyChanges(s: string): number {
    
    let arr:string[] = s.toUpperCase().split('');
let num:number = 0;
    for(let i:number=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1])
            num++;
    }
    return(num - 1);
};