function alternateDigitSum(n: number): number {
    const str: String = n.toString()
    let sum: number = 0
    for(let i =0; i<str.length; i++){
        if(i%2 ==0){
            sum += +str[i]
        }else{
            sum -= +str[i]
        }
    }
    return sum
};