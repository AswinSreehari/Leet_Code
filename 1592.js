 /**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
    const spaces = text.replace(/[^\s]/g, '').length;
    const words = text.trim().split(/\s+/);
    const n = words.length - 1;

    if (!n) {
        return words[0] + ' '.repeat(spaces);
    }

    const spacesBetweenWords = ' '.repeat(spaces / n);
    const remainingSpaces = ' '.repeat(spaces % n);
    return words.join(spacesBetweenWords) + remainingSpaces;
};
