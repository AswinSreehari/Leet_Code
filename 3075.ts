function maximumHappinessSum(happiness: number[], k: number): number {
    let result = 0;
     happiness = happiness.sort((a,b) => b - a);
     for ( let i = 0; i < k; i++ ) {
         if( happiness[i] + -i > 0) {
             result += happiness[i] + -i;
         } else {
             break;
         }
     }
     return result; 
 };