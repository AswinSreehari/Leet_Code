function minimumPushes(word: string): number {
    let cost: number = 1;
    let sum: number = 0;
    while(word.length > 0){
        if(word.length > 8){
            sum += cost * 8;
        }else{
            sum += cost * word.length;
        }
        word = word.substring(8);
        cost++;
    }
    return sum;
};
