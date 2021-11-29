const processLauncher = require("./processLauncher.js");

(async function launchAnalysis() {
  const MAX_GAMBLE = 32;
  const MONEY_TO_REACH = 1_000_000;
  const ROUNDS = 100;
  try {
    for (let i = 1; i <= MAX_GAMBLE; i++) {
      await processLauncher.infinitMoneyParadoxProcesses(ROUNDS, i, MONEY_TO_REACH);
    }
  } catch(e) {
    console.log("Something went wrong");
    console.log(e);
  }
})()
