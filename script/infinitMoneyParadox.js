const { exit } = require("process");

const gambleMoney = parseInt(process.argv[2]);
const moneyToReach = parseInt(process.argv[3]);
const timeStart = Date.now();

let money = gambleMoney;
let round = 1;

while (money < moneyToReach) {
  game().roundOfPlay();
  round ++;
}

console.log(`money: ${money}, rounds: ${round}, duration: ${Date.now() - timeStart}ms`);
exit(0);

function game() {
  let gain = 2;
  money -= gambleMoney;
  function roundOfPlay() {
    while (1) {
      if (Math.floor(Math.random() * 2) === 1) {
        gain *= 2;
      } else {
        money += gain;
        break;
      }
    }
  }

  return { roundOfPlay };
}