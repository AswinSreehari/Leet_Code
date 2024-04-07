function checkValidString(s: string): boolean {
    let memo = new Map<string, boolean>();
   
       function dfs(start: number, openCount: number): boolean {
           const key = `${start}-${openCount}`;
           if (memo.has(key)) {
               return memo.get(key)!;
           }
   
           if (start === s.length) {
               const result = openCount === 0;
               memo.set(key, result);
               return result;
           }
   
           if (s[start] === '(') {
               const result = dfs(start + 1, openCount + 1);
               memo.set(key, result);
               return result;
           } else if (s[start] === ')') {
               if (openCount > 0) {
                   const result = dfs(start + 1, openCount - 1);
                   memo.set(key, result);
                   return result;
               } else {
                   memo.set(key, false);
                   return false;
               }
           } else {
               const result =
                   dfs(start + 1, openCount + 1) ||
                   (openCount > 0 && dfs(start + 1, openCount - 1)) ||
                   dfs(start + 1, openCount);
               memo.set(key, result);
               return result;
           }
       }
   
       return dfs(0, 0);
       };
   
    
    
   
    