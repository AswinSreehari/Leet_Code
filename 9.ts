function isPalindrome(x: number): boolean {
    let rev: number
      const temp = x.toString().split("").reverse().join('')
      rev = parseInt(temp)
      return rev === x
  };