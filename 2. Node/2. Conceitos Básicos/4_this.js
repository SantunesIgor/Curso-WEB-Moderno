console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports); // arrows seguem o mesmo principio

function logThis() {
  console.log("Dentro da função traducional: ");
  console.log(this === global);
  console.log(this === module);
  console.log(this === module.exports);
  console.log(this === exports);
}

logThis()
