//Javascript

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let peak = [];
    for(let i = 0 ; i < mountain.length ; i ++){
        if(mountain[i] > mountain[i+1] && mountain[i] > mountain[i-1]){
            peak.push(i);
        }
    }
    return peak;
};

//TypeScript

function findPeaks(mountain: number[]): number[] {
    let peak:number[] = [];
  for(let i = 0 ; i < mountain.length ; i ++){
      if(mountain[i] > mountain[i+1] && mountain[i] > mountain[i-1]){
          peak.push(i);
      }
  }
  return peak;
  
};