const tec = new Map();
tec.set("react", { framework: false });
tec.set("angular", { framework: true });

console.log(tec.react);
console.log(tec.get("react").framework);

const varKey = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

varKey.forEach((v1, ch) => {
    console.log(ch, v1)
})

console.log(varKey.has(123))
varKey.delete(123)
console.log(varKey.has(123))
console.log(varKey.size)

console.log(varKey)