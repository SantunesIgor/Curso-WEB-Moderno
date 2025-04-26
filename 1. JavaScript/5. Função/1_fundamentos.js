function fun1() {} // criam uma função

const fun2 = function () {}; // armazenar a função em uma variável

const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
]; //podemos armazenar em array
console.log(array[0](2, 2));

const obj = {};
obj.falar = function () {
  return "opa";
};
console.log(obj.falar()); // criar uma função em um objeto

function run(fun) {
  fun();
}
run(function () {
  console.log("EXE");
}); //função como paramentro

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(3);
const const1 = soma(1, 2);
const1(2); // chamar pela segunda vez
