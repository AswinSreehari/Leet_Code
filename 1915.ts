function wonderfulSubstrings(word: string): number {
    const seen = new Map<number, number>();
        seen.set(0, 1);
        let ans = 0;
        let mask = 0;
    
        for (const c of word) {
            mask ^= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
    
            ans += seen.get(mask) || 0;
    
            for (let i = 0; i <= 'j'.charCodeAt(0) - 'a'.charCodeAt(0); i++) {
                const alteredMask = mask ^ (1 << i);
                ans += seen.get(alteredMask) || 0;
            }
    
            seen.set(mask, (seen.get(mask) || 0) + 1);
        }
    
        return ans;
    };