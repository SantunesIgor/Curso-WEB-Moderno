function talkAfter(sec, phrase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phrase);
    }, sec * 1000);
  });
}

talkAfter(3, "Teste")
  .then((phrase) => phrase.concat("?"))
  .then((phrase2) => console.log(phrase2))
  .catch((e) => console.log(e));
