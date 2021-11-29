const { exec } = require('child_process');
//const results = require('./infinitMoneyParadox');
(function infinitGameMoneyStats(nbProcesses) {
  const gambleMoney = 32;
  const moneyToReach = 1_000_000;
  let cumulateRounds = 0;
  let processDone = 0;
  function processMoney(numProcess) {
    exec(`node ${__dirname}/infinitMoneyParadox.js ${gambleMoney} ${moneyToReach}`, (error, stdout, stderr) => { 
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
    
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`Process ${numProcess}: ${stdout}`);
      endProcesses(stdout);
    });
  }

  function endProcesses(stdout) {
    processDone ++;
    cumulateRounds += parseInt(stdout.split(',')[1].replace('rounds:', '').trim());
    if (processDone === nbProcesses) {
      console.log(`Final results when gambling ${gambleMoney}:\nNumber parallele executions => ${nbProcesses}\nAverage number of rounds => ${Math.round(cumulateRounds/nbProcesses)}`);
    }
  }

  for (let i = 0; i < nbProcesses; i++) { processMoney(i); }
})(10);
