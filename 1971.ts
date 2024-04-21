function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const root = [...Array(n).keys()]
    const find = (i: number) => root[i] === i ? i : root[i] = find(root[i])
    const union = (i: number, j: number) => {
        root[find(i)] = root[find(j)] = Math.max(find(i), find(j))
    }

    edges.forEach(([i, j]) => union(i, j))
    return find(source) === find(destination)
};