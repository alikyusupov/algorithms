let company = {
 sales: [
  { name: "John", salary: 1000 },
  { name: "Alice", salary: 600 },
 ],
 development: {
  sites: [
   { name: "Peter", salary: 2000 },
   { name: "Alex", salary: 1800 },
  ],
  internals: [{ name: "Jack", salary: 1300 }],
 },
};

const sumUp = (obj) => {
 if (Array.isArray(obj)) {
  return obj.reduce((prev, curr) => prev + curr.salary, 0);
 } else {
  let sum = 0;
  for (const elem of Object.values(obj)) {
   sum += sumUp(elem);
  }
  return sum;
 }
};
console.log(sumUp(company));
