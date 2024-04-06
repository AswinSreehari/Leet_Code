function reverseVowels(s: string): string {
    if (s.length <= 1) return s;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let stringArr = s.split('');
    let i = 0;
    let j = stringArr.length - 1;
    
    while (i < j) {
        while (i < j && !vowels.has(stringArr[i])) {
            i++;
        }
        while (i < j && !vowels.has(stringArr[j])) {
            j--;
        }
        
        [stringArr[i], stringArr[j]] = [stringArr[j], stringArr[i]];
        i++;
        j--;
    }
    
    return stringArr.join('');
};