function numRescueBoats(people: number[], limit: number): number {
    people=people.sort((a,b)=>a-b)

 let left=0,right=people.length-1,boat=0;

 while(left<=right){
   if(people[left]+people[right]<=limit){
       left++;
   }
   right--
   boat++
 }
 return boat;
};