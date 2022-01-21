const countConstruct = (target, wordbank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1
    let totalWays = 0
    for (const word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const numWays = countConstruct(suffix, wordbank, memo)
            totalWays += numWays
        }
    }
    memo[target] = totalWays
    return totalWays
    
}

console.log(countConstruct('bubbles', ['bub', 'bl', 'es', 's', 'e', 'bubbl']));