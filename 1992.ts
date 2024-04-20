function findFarmland(land: number[][]): number[][] {
    const m = land.length;
const n = land[0].length;
const result: number[][] = [];

const dfs = (i: number, j: number, limits: number[]) => {
    if (i < 0 || i >= m || j < 0 || j >= n || land[i][j] === 0) {
        return;
    }
    land[i][j] = 0;

    limits[0] = Math.min(limits[0], i);
    limits[1] = Math.min(limits[1], j);
    limits[2] = Math.max(limits[2], i);
    limits[3] = Math.max(limits[3], j);

    dfs(i + 1, j, limits);
    dfs(i - 1, j, limits);
    dfs(i, j + 1, limits);
    dfs(i, j - 1, limits);
};

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (land[i][j] === 1) {
            let limits = [i, j, i, j];
            dfs(i, j, limits);
            result.push(limits);
        }
    }
}

return result;
};