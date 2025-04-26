function genNum(min, max, blockedNum) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((res, rej) => {
    let random = Math.round(Math.random() * (max - min) + min);

    if (blockedNum.includes(random)) {
      rej("Blocked Number!");
    } else {
      res(random);
    }
  });
}

async function bingo(numLength) {
  while (true) {
    try {
      const nums = [];
      for (let _ of Array(numLength).fill()) {
        nums.push(await genNum(1, 60, nums));
      }
      return nums;
    } catch (e) {
      continue;
    }
  }
}

bingo(10).then(console.log).catch(console.log);
