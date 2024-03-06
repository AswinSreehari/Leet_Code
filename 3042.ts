function countPrefixSuffixPairs(words: string[]): number {
    let count = 0;
    words.map((word, index) => {
        for (let x = index + 1; x < words.length; x++)
            if(words[x].startsWith(word) && words[x].endsWith(word)) count++
    })
    return count;
};