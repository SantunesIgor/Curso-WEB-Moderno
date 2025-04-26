// nao aceita repetição e nem é indexado
const time = new Set();
time.add("Vasco");
time.add("Criciúma");
time.add("Vasco");

console.log(time);
console.log(time.size);
console.log(time.has("Vasco"));
console.log(time.has("vasco"));
time.delete("Vasco");
console.log(time);
