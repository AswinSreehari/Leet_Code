let total = 0
    const loop = (root, rootToLeaf) => {
        if (!root) return
        if (isEnd(root)) {

            return total += Number(rootToLeaf + root.val) || 0
        }
        if (root.left) {
           loop(root.left, rootToLeaf + root.val) || 0
        }
        if (root.right) {
            loop(root.right, rootToLeaf + root.val) || 0
        
        }
    }
    const isEnd = (root) => {
        return !root.left && !root.right
    }

    loop(root, "")
    return total