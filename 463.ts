function islandPerimeter(grid: number[][]): number {
    let perimeter: number = 0;
        const row = grid.length;
        const col = grid[0].length;
    
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] === 1) {
                    if (i === 0 || grid[i - 1][j] === 0) perimeter++;
                    if (j === 0 || grid[i][j - 1] === 0) perimeter++; 
                }
            }
        }
    
        return perimeter*2;
    };