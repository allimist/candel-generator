const randvalue = 10
const pair_id = 1

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function generateCandels(pair_id) {
  //for (i = 0; i < 100; i++) {
  while(1){

    const candel = {
      p: pair_id,
      d: Date.now(),
      o: getRandomInt(randvalue),
      h: getRandomInt(randvalue),
      l: getRandomInt(randvalue),
      c: getRandomInt(randvalue)
    }
    console.log(candel);
    await sleep(1000);
  }
}

generateCandels('eth-btc')
generateCandels('ltc-btc')
generateCandels('xmr-btc')
