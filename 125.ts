function isPalindrome(s: string): boolean {
    const cString: string = s.split(' ').join('').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const rString: string = cString.split('').reverse().join('').toLowerCase();
    return cString === rString;
};