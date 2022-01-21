const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    for (const num of numbers) {
        const remainder = targetSum - num
        const remainerResult = howSum(remainder, numbers, memo)
        if (remainerResult !== null) {
            memo[targetSum] = [...remainerResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return null
}
console.log(howSum(300, [7, 14, 1]));