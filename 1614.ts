function maxDepth(s: string): number {
    let arr:string[]=[], num:number=0;
    for(let i:number=0;i<s.length;i++){
        if(s[i]==='('){
            arr.push(s[i]);
            num=num>arr.length?num:arr.length;
        }
        else if(s[i]===')'){
            arr.pop();
        }
    }
    return num; 
    };