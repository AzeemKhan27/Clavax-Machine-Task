// Array = [1, 3, 6, 1 ,6, 2, 3, 2, 3] 
// Expected Output = {1:2, 2:2, 3:3 ,6:2}   



let arr = [1, 3, 6, 1 ,6, 2, 3, 2, 3];

let frequency = arr.reduce(function(acc,element){
    acc[element] = (acc[element] || 0) + 1;
    return acc;
},{});

console.log("All numbers occurence is : ",frequency);
