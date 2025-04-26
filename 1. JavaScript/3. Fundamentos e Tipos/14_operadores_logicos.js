function opLogico(var1, var2){
    const or = var1 || var2
    const and = var1 && var2
    // const xor = !!(var1 ^ var2) // bitwise xor
    const xor = var1 != var2
    const not = [!var1, !var2]
    return {or, and, xor, not}
}

console.log(opLogico(1, 1))
console.log(opLogico(1, 0))
console.log(opLogico(0, 0))