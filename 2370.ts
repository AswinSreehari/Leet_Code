function longestIdealString(s: string, k: number): number {
    const dp: number[] = new Array(26).fill(0);
    let res: number = 1;
    for (let i = 0; i < s.length; i++) {
        const e: number = s.charCodeAt(i) - 'a'.charCodeAt(0);
        for (let j = e; j >= 0 && j >= e - k; j--) {
            dp[e] = Math.max(dp[j] + 1, dp[e]);
        }
        for (let j = e + 1; j < 26 && j <= e + k; j++) {
            dp[e] = Math.max(dp[j] + 1, dp[e]);
        }
        res = Math.max(res, dp[e]);
    }
    return res;
};