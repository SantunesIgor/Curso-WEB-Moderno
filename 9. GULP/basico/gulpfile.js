const gulp = require("gulp");
const { series } = require("gulp");

const antes1 = (cb) => {
  console.log("Antes 1!");
  return cb();
};

function copiar(cb) {
  gulp.src(['pastaA/**/*.txt']).pipe(gulp.dest('pastaB'));
  return cb();
}

module.exports.default = gulp.parallel(antes1, copiar);