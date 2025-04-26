//usada para reduzir sintaxe

dobro = (a) => {
  return 2 * a;
};
console.log(dobro(90));

triplo = (a) => {
  return a * 3;
};
console.log(triplo(3));

quadruplo = (a) => a * 4;

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age); // o this se comporta como se estivese no bloco acima da funcao
  }, 1000);
}
// new Person

let thisCompare = function (param) {
  console.log(this === param);
};
thisCompare(global);
thisCompare(this);

let thisCompareArrow = (a) => console.log(this === a);
thisCompareArrow(global);
thisCompareArrow(this);
console.log("Console this === global:", this === global);

const obj = {};
thisCompareArrow = thisCompareArrow.bind(obj);
thisCompareArrow(obj);
