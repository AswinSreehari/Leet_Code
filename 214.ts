function shortestPalindrome(s: string): string {
    let length: number = s.length;
    let reverse = s.split('').reverse().join('');
    for(let i = 0 ; i < length ; ++ i ){
        if(reverse.slice(i) == s.slice(0, length -i)){
            return reverse.slice(0, i) +s;
        }
    }
    return "";
};