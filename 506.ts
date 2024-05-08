function findRelativeRanks(score: number[]): string[] {
    const sortedScore = [...score].sort((a,b) => a < b ? 1 : -1);
    const map = {};
    sortedScore.forEach((e, i) => {
        map[e] = i + 1;
    })
    const n = score.length;
    return score.map((s) => {
        if (s === sortedScore[0]) {
            return "Gold Medal";
        }
        if (s === sortedScore[1]) {
            return "Silver Medal";
        }
        if (s === sortedScore[2]) {
            return "Bronze Medal";
        }

        return map[s].toString();
    })
};