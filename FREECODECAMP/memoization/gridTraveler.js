const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    if (key in memo) return memo[key]
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

console.log(gridTraveler(18, 18));
