function minimumLength(s: string): number {
    let left = 0;
   let right = s.length - 1;
   while (left < right) {
       if (s[left] !== s[right]) {
           return right - left + 1;
       }

       while (left + 1 < right && s[left] === s[left + 1]) {
           left++;
       }
       while (right - 1 > left && s[right] === s[right - 1]) {
           right--;
       }

       left++;
       right--;
   }

   return left === right ? 1 : 0;
   
};