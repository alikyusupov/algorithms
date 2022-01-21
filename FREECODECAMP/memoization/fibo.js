// const fibo = (n, memo = {}) => {
//     if (n in memo) return memo[n]
//     if (n <= 2) return 1
//     memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)
//     return memo[n]
// }
// const start = global.performance.now()
// fibo(1000)
// const end = global.performance.now()
// console.log(end - start)

const fibo = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n === 0 || n === 1) return 1
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)
    return memo[n]
}

const start = global.performance.now()
console.log(fibo(1000));
const end = global.performance.now()
console.log(end - start)