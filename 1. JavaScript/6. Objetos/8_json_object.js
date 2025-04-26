// json é um formato textual e nao apresenta camadas mais complexas que essa, como function() por exemplo.
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj));

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // chaves entre "" aspas duplas.
