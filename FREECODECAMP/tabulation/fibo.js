const fibo = (n) => {
 const table = Array(n + 1).fill(0);
 table[1] = 1;
 for (let idx = 0; idx <= n; idx++) {
  table[idx + 1] += table[idx];
  table[idx + 2] += table[idx];
 }
 return table[n];
};
console.time();
fibo(100);
console.timeEnd();

const counter = () => {
 let count = 0;
 return () => {
  return (count += 1);
 };
};

const countOne = counter();
const countTwo = counter();
console.log(countOne());
console.log(countOne());
console.log(countTwo());
console.log(countOne());
