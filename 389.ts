function findTheDifference(s: string, t: string): string {
    let frequencyS: { [key: string]: number } = {};
    let frequencyT: { [key: string]: number } = {};
    for (let char of s) {
        frequencyS[char] = (frequencyS[char] || 0) + 1;
    }
    for (let char of t) {
        frequencyT[char] = (frequencyT[char] || 0) + 1;
    }
    for (let char in frequencyT) {
        if (!frequencyS[char] || frequencyT[char] > frequencyS[char]) {
            return char;
        }
    }
    return ''; 
}
