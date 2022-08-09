let first = 20;
let second = 30;
console.log(first,second);

// first = second;
// second = first;

// approch one
const temp = first;
first = second;
second = temp;

// approch two
[first,second] = [second,first];
console.log(first,second);