// String = “Taj Mahal” 
// Expected Output = “jaT lahaM”


const str = "Taj Mahal";

const words = str.split(' ');

const reverseWords = words.map(word => word.split('').reverse().join(''));

const result = reverseWords.join(' ');

console.log(result);